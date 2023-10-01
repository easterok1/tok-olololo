import { InjectionKey, Ref, ref } from 'vue';

type Component = any;

export type AlertHostParams<T = unknown> = {
  // default: success
  type?: 'success' | 'error' | string;

  label?: string;

  // default: true
  autoClose?: boolean | number;

  // default: true
  hasClose?: boolean;

  data?: T;
};

type InternalAlert = {
  id: string;
  content: Component | string;
  label: string;
  type: NonNullable<AlertHostParams['type']>;
  closable: boolean;
  data: unknown;
};

const DEFAULT_CLOSE_TIMEOUT = 5000;

export const AlertHostDefaultParams: Required<AlertHostParams> = {
  type: 'success',
  autoClose: 5000,
  data: undefined,
  label: '',
  hasClose: true,
};

type AlertsConnector = {
  alerts: Ref<InternalAlert[]>;
  show: (
    id: string,
    content: string | Component,
    params?: AlertHostParams
  ) => void;
  close: (id: string) => void;
  closeLast: () => void;
};

export function createAlertsConnector(): AlertsConnector {
  const alerts = ref<InternalAlert[]>([]);

  const timeoutDict = new Map<string, ReturnType<typeof setTimeout>>();

  const close: AlertsConnector['close'] = (id) => {
    const timeout = timeoutDict.get(id);

    if (timeout) {
      clearTimeout(timeout);
    }

    timeoutDict.delete(id);

    alerts.value = alerts.value.filter(({ id: alertId }) => alertId !== id);
  };

  const show: AlertsConnector['show'] = (
    id,
    content,
    params = AlertHostDefaultParams
  ) => {
    const {
      type = AlertHostDefaultParams.type,
      autoClose = AlertHostDefaultParams.autoClose,
      label,
      hasClose = AlertHostDefaultParams.hasClose,
    } = params;

    alerts.value = alerts.value.concat({
      id,
      content,
      type: type,
      label: label || '',
      closable: hasClose,
      data: params.data,
    });

    if (autoClose) {
      const closeTimeout =
        typeof autoClose === 'number' ? autoClose : DEFAULT_CLOSE_TIMEOUT;

      const timeout = setTimeout(() => {
        close(id);
      }, closeTimeout);

      timeoutDict.set(id, timeout);
    }
  };

  const closeLast: AlertsConnector['closeLast'] = () => {
    const last = alerts.value[0];

    if (last) {
      close(last.id);
    }
  };

  return {
    alerts,
    close,
    closeLast,
    show,
  };
}

export const ALERTS_HOST_TOKEN = Symbol() as InjectionKey<AlertsConnector>;
