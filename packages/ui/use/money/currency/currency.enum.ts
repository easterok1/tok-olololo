// cspell:disable
/**
 * **Active ISO 4217 alphabetic currency codes**
 *
 * @description The ISO 4217 classification is used to describe alphabetic and numeric currency codes.
 * @description Alphabetic code is also called "alfa-3".
 *
 * @link https://en.wikipedia.org/wiki/ISO_4217
 */
export enum Currency {
  /**
   * Armenian dram
   *
   * @description Numeric code: 051
   * @description Alphabetic code: AMD
   * @description Countries and territories: Armenia
   * @description Currency symbol: ֏
   */
  ArmenianDram = `AMD`,

  /**
   * Australian dollar
   *
   * @description Numeric code: 036
   * @description Alphabetic code: AUD
   * @description Countries and territories: Australia, Christmas Island (CX), Cocos (Keeling) Islands (CC), Heard Island and McDonald Islands (HM), Kiribati (KI), Nauru (NR), Norfolk Island (NF), Tuvalu (TV)
   * @description Currency symbol: A$
   */
  AustralianDollar = `AUD`,

  AzerbaijaniManat = `AZN`,

  /**
   * Thai baht
   *
   * @description Numeric code: 764
   * @description Alphabetic code: THB
   * @description Countries and territories: Thailand
   * @description Currency symbol: ฿
   */
  Baht = `THB`,

  BelarusianRuble = `BYN`,

  /**
   * Brazilian Real
   *
   * @description Numeric code: 986
   * @description Alphabetic code: BRL
   * @description Countries and territories: Brazilia
   * @description Currency symbol: R$
   */
  BrazilianReal = `BRL`,

  /**
   * Canadian dollar
   *
   * @description Numeric code: 124
   * @description Alphabetic code: CAD
   * @description Countries and territories: Canada
   * @description Currency symbol: C$
   */
  CanadianDollar = `CAD`,

  /**
   * United Arab Emirates dirham
   *
   * @description Numeric code: 784
   * @description Alphabetic code: AED
   * @description Countries and territories: United Arab Emirates
   * @description Currency symbol: Dh
   */
  Dirham = `AED`,

  /**
   * United States dollar
   *
   * @description Numeric code: 840
   * @description Alphabetic code: USD
   * @description Countries and territories: United States, American Samoa (AS), British Indian Ocean Territory (IO) (also uses GBP), British Virgin Islands (VG), Caribbean Netherlands (BQ – Bonaire, Sint Eustatius and Saba), Ecuador (EC), El Salvador (SV), Guam (GU), Marshall Islands (MH), Federated States of Micronesia (FM), Northern Mariana Islands (MP), Palau (PW), Panama (PA) (as well as Panamanian Balboa), Puerto Rico (PR), Timor-Leste (TL), Turks and Caicos Islands (TC), U.S. Virgin Islands (VI), United States Minor Outlying Islands (UM)
   * @description Currency symbol: $
   */
  Dollar = `USD`,

  /**
   * Euro
   *
   * @description Numeric code: 978
   * @description Alphabetic code: EUR
   * @description Countries and territories: Åland Islands (AX), European Union (EU), Andorra (AD), Austria (AT), Belgium (BE), Cyprus (CY), Estonia (EE), Finland (FI), France (FR), French Southern and Antarctic Lands (TF), Germany (DE), Greece (GR), Guadeloupe (GP), Ireland (IE), Italy (IT), Latvia (LV), Lithuania (LT), Luxembourg (LU), Malta (MT), French Guiana (GF), Martinique (MQ), Mayotte (YT), Monaco (MC), Montenegro (ME), Netherlands (NL), Portugal (PT), Réunion (RE), Saint Barthélemy (BL), Saint Martin (MF), Saint Pierre and Miquelon (PM), San Marino (SM), Slovakia (SK), Slovenia (SI), Spain (ES), Vatican City (VA)
   * @description Currency symbol: €
   */
  Euro = `EUR`,

  GeorgianLari = `GEL`,

  /**
   * Hong Kong dollar
   *
   * @description Numeric code: 344
   * @description Alphabetic code: HKD
   * @description Countries and territories: Hong Kong
   * @description Currency symbol: HK$
   */
  HongKongDollar = `HKD`,

  /**
   * Ukrainian hryvnia
   *
   * @description Numeric code: 980
   * @description Alphabetic code: UAH
   * @description Countries and territories: Ukraine
   * @description Currency symbol: ₴
   */
  Hryvnia = `UAH`,

  /**
   * Indian rupee
   *
   * @description Numeric code: 356
   * @description Alphabetic code: INR
   * @description Countries and territories: India, Bhutan
   * @description Currency symbol: ₹
   */
  IndianRupee = `INR`,

  IndonesianRupiah = `IDR`,

  IranianRial = `IRR`,

  /**
   * Israeli new shekel
   *
   * @description Numeric code: 376
   * @description Alphabetic code: ILS
   * @description Countries and territories: Israel
   * @description Currency symbol: ₪
   */
  IsraeliShekel = `ILS`,

  /**
   * Kyrgyzstani som
   *
   * @description Numeric code: 417
   * @description Alphabetic code: KGS
   * @description Countries and territories: Kyrgyzstan
   * @description Currency symbol: c
   */
  KyrgyzstanSom = `KGS`,

  MalaysianRinggit = `MYR`,

  /**
   * Mexican peso
   *
   * @description Numeric code: 484
   * @description Alphabetic code: MXN
   * @description Countries and territories: Mexico
   * @description Currency symbol: $
   */
  MexicanPeso = `MXN`,

  MongolianTugrik = `MNT`,

  NewTurkmenManat = `TMT`,

  /**
   * Pound sterling
   *
   * @description Numeric code: 826
   * @description Alphabetic code: GBP
   * @description Countries and territories: United Kingdom, Isle of Man (IM, see Manx pound), Jersey (JE, see Jersey pound), Guernsey (GG, see Guernsey pound), Tristan da Cunha (SH-TA)
   * @description Currency symbol: £
   */
  Pound = `GBP`,

  /**
   * Russian ruble
   *
   * @description Numeric code: 643
   * @description Alphabetic code: RUB
   * @description Countries and territories: Russia
   * @description Currency symbol: ₽
   */
  Ruble = `RUB`,

  /**
   * Malaysian ringgit
   *
   * @description Numeric code: 458
   * @description Alphabetic code: MYR
   * @description Countries and territories: Malaysia
   * @description Currency symbol: RM
   */

  SaudiRiyal = `SAR`,
  /**
   *
   * Belarusian ruble
   *
   * @description Numeric code: 933
   * @description Alphabetic code: BYN
   * @description Countries and territories: Belarus
   * @description Currency symbol: Rbl
   */

  SerbianDinar = `RSD`,
  /**
   * Georgian lari
   *
   * @description Numeric code: 981
   * @description Alphabetic code: GEL
   * @description Countries and territories: Georgia
   * @description Currency symbol: ₾
   */

  /**
   * Singapore dollar
   *
   * @description Numeric code: 702
   * @description Alphabetic code: SGD
   * @description Countries and territories: Singapore
   * @description Currency symbol: S$
   */
  SingaporeDollar = `SGD`,
  /**
   * Azerbaijani manat
   *
   * @description Numeric code: 944
   * @description Alphabetic code: AZN
   * @description Countries and territories: Azerbaijan
   * @description Currency symbol: ₼
   */

  SouthAfricanRand = `ZAR`,
  /**
   * Sri Lankan rupee
   *
   * @description Numeric code: 144
   * @description Alphabetic code: LKR
   * @description Countries and territories: Sri Lanka
   * @description Currency symbol: Rs.
   */

  SriLankanRupee = `LKR`,
  /**
   * Serbian dinar
   *
   * @description Numeric code: 941
   * @description Alphabetic code: RSD
   * @description Countries and territories: Serbia
   * @description Currency symbol: DIN
   */

  /**
   * Swiss franc
   *
   * @description Numeric code: 756
   * @description Alphabetic code: CHF
   * @description Countries and territories: Switzerland, Liechtenstein (LI)
   * @description Currency symbol: ₣
   */
  SwissFranc = `CHF`,
  /**
   * Saudi Riyal
   *
   * @description Numeric code: 682
   * @description Alphabetic code: SAR
   * @description Countries and territories: Saudi Arabia
   * @description Currency symbol: SR
   */

  /**
   * Tajikistani somoni
   *
   * @description Numeric code: 972
   * @description Alphabetic code: TJS
   * @description Countries and territories: Tajikistan
   * @description Currency symbol: SM
   */
  TajikistaniSomoni = `TJS`,
  /**
   * Mongolian tugrik
   *
   * @description Numeric code: 496
   * @description Alphabetic code: MNT
   * @description Countries and territories: Mongolia
   * @description Currency symbol: ₮
   */

  /**
   * Kazakhstani tenge
   *
   * @description Numeric code: 398
   * @description Alphabetic code: KZT
   * @description Countries and territories: Kazakhstan
   * @description Currency symbol: ₸
   */
  Tenge = `KZT`,
  /**
   * South African rand
   *
   * @description Numeric code: 710
   * @description Alphabetic code: ZAR
   * @description Countries and territories: South Africa
   * @description Currency symbol: R
   */

  /**
   * Turkish lira
   *
   * @description Numeric code: 949
   * @description Alphabetic code: TRY
   * @description Countries and territories: Turkey
   * @description Currency symbol: ₺
   */
  TurkishLira = `TRY`,
  /**
   * Iranian rial
   *
   * @description Numeric code: 364
   * @description Alphabetic code: IRR
   * @description Countries and territories: Iran
   * @description Currency symbol: IR
   */

  /**
   * Uzbek sum
   *
   * @description Numeric code: 860
   * @description Alphabetic code: UZS
   * @description Countries and territories: Uzbekistan
   * @description Currency symbol: So'm
   */
  UzbekSum = `UZS`,
  /**
   * Indonesian rupiah
   *
   * @description Numeric code: 360
   * @description Alphabetic code: IDR
   * @description Countries and territories: Indonesia
   * @description Currency symbol: Rp
   */

  VietnameseDong = `VND`,
  /**
   * Vietnamese dong
   *
   * @description Numeric code: 704
   * @description Alphabetic code: VND
   * @description Countries and territories: Vietnam
   * @description Currency symbol: đ
   */

  /**
   * South Korean won
   *
   * @description Numeric code: 410
   * @description Alphabetic code: KRW
   * @description Countries and territories: South Korea
   * @description Currency symbol: ₩
   */
  Won = `KRW`,
  /**
   * New Turkmen manat
   *
   * @description Numeric code: 934
   * @description Alphabetic code: TMT
   * @description Countries and territories: Turkmenistan
   * @description Currency symbol: TMT
   */

  /**
   * Japanese yen
   *
   * @description Numeric code: 392
   * @description Alphabetic code: JPY
   * @description Countries and territories: Japan
   * @description Currency symbol: ¥
   */
  Yen = `JPY`,
  /**
   * Chinese yuan
   *
   * @description Numeric code: 156
   * @description Alphabetic code: CNY
   * @description Countries and territories: China
   * @description Currency symbol: CN¥
   */
  YuanRenminbi = `CNY`,
}
