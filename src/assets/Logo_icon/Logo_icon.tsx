interface Propriedades {
    width: string;
    height: string;
}

export default function Logo_icon(props: Propriedades) {
    return (
    <svg
        xmlns="http://www.w3.org/2000/svg"
        width={props.width}
        height={props.height}
        viewBox="0 0 18 16"
        className="logo_icon"
        role="img"
        aria-labelledby="Logo Vapt-Vupt"
    >
    <title>Logo Vapt-Vupt</title>
    <path d="M5.56948 8.18213e-07L2 5.05462e-07C0.895429 4.08682e-07 -5.89806e-07 0.89543 -6.86155e-07 2L-1.04579e-06 6.12289C-1.12802e-06 7.06558 0.764201 7.82979 1.70689 7.82979C2.64959 7.82979 3.41379 8.59399 3.41379 9.53668L3.41379 9.70213L3.41379 14C3.41379 15.1046 4.30922 16 5.41379 16L8.42727 16C8.98979 16 9.5263 15.7631 9.90527 15.3474L17.478 7.04068C17.8138 6.67229 18 6.19176 18 5.69327L18 2C18 0.895432 17.1046 1.82889e-06 16 1.73211e-06L13.1417 1.48167e-06C12.5792 1.43239e-06 12.0427 0.236892 11.6637 0.652596L9.86547 2.62512C8.90036 3.68377 7.13793 3.00099 7.13793 1.56845C7.13793 0.702219 6.43571 8.9411e-07 5.56948 8.18213e-07Z"/>
    </svg>
    );
  }