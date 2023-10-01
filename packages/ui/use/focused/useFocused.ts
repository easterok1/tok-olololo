import { MaybeComputedRef, resolveRef } from '@tok/ui/types';
import { readonly, ref, watch } from 'vue';

// todo
// import { useControlAccess } from '../useControlAccess';

export function useFocused(native: MaybeComputedRef<HTMLElement | null>) {
  // const controlAccess = useControlAccess();

  const nativeRef = resolveRef(native);
  const focused = ref(false);

  const onFocus = () => (focused.value = true);
  const onBlur = () => {
    focused.value = false;
    // controlAccess?.markAsTouch();
  };

  watch(
    nativeRef,
    (native, _, onCleanup) => {
      native?.addEventListener('focusin', onFocus);
      native?.addEventListener('focusout', onBlur);

      onCleanup(() => {
        native?.removeEventListener('focusin', onFocus);
        native?.removeEventListener('focusout', onBlur);
      });
    },
    { immediate: true }
  );

  return readonly(focused);
}
