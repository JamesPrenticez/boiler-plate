import clm from "country-locale-map";

export const useCurrencyFormatter = (countryCode: string = "NZ"): Intl.NumberFormat => {
  const country = clm.getCountryByAlpha2(countryCode);
  const locale = country?.default_locale.replace("_", "-");

  // if (country !== undefined) {
  //   console.log(`Currency: ${country.currency}`);
  //   console.log(`Default Locale: ${locale}`);
  // }

  const currencyFormatter = new Intl.NumberFormat(locale, {
    style: "currency",
    currency: country?.currency,
  });

  return currencyFormatter;
};
