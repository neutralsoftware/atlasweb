import { useId } from "react";

type GradientLogoProps = {
    className?: string;
};

export default function GradientLogo({ className }: GradientLogoProps) {
    const id = useId();

    const clipId = `${id}-clip`;
    const cyanId = `${id}-cyan`;
    const violetId = `${id}-violet`;
    const pinkId = `${id}-pink`;
    const orangeId = `${id}-orange`;

    return (
        <svg
            viewBox="0 0 762 716"
            xmlns="http://www.w3.org/2000/svg"
            className={className}
            aria-hidden="true"
            style={{
                filter: "saturate(1.7) brightness(1.2)",
            }}
        >
            <defs>
                <clipPath id={clipId}>
                    <path d="M381.8,65.6C381.8,50.7 389.7,47.1 397.2,53.4C406.1,60.9 416.7,86.1 430.4,113.4C474.1,200.5 535.9,281.8 618.9,327.4C636.8,337.3 655.1,343.3 668.6,348.8C682.4,354.4 679.7,367.7 669.4,372.1C658.9,376.5 630.4,371.7 603.9,370.2C534.5,366.3 475.4,357.5 437.2,334.5C399.8,312 381.6,270.7 381.7,211.7L381.8,65.6Z" />

                    <path d="M367.2,204.4C360.7,238.5 346.8,266.8 324.3,290.9C298.5,318.5 270.4,335.8 231.3,346.8C195.2,356.9 151.1,361.8 105.2,365.1C95.6,365.8 91.4,362.2 97.8,357.1C104.5,351.8 122.1,346.7 143.4,338.6C191.7,320.3 244.9,300.8 286.2,278.6C326.1,257.1 352.8,235.8 367.2,204.4Z" />

                    <path d="M93.7,364.5C93.5,356.7 102.9,358.1 113.1,360.1C129.3,363.2 150.3,365.3 171.4,367.7C229.9,374.4 276.1,393.2 313.8,429.1C352.6,466 375.1,501.5 382.6,545.5C386.8,570.3 384.2,608.6 384.2,654.7C384.2,670 377.6,674.6 368.6,669.1C359.2,663.4 351.1,642.8 339.6,619.9C307.4,555.5 273.3,501.7 229.3,458.5C191.6,421.5 154.9,399.3 111.5,386.6C101.2,383.6 93.9,372.7 93.7,364.5Z" />

                    <path d="M396.9,530.5C404.6,498.9 421.2,468.9 445.5,444.7C474.7,415.5 509.6,397.7 553.8,386.6C586.4,378.4 614.6,369 657.8,365.8C662.793,365.411 673.686,360.695 676.793,362.005C678.478,362.716 675.756,368.729 673.4,370.1C671.356,371.278 668.754,372.84 665.729,374.643C655.139,380.955 639.367,389.211 624.2,395.2C568,417.2 513.3,441.8 469.1,470.6C433.6,493.7 410.9,512.9 396.9,530.5Z" />
                </clipPath>

                <radialGradient id={cyanId}>
                    <stop offset="0%" stopColor="#7BE7FF" />
                    <stop offset="100%" stopColor="#2BC8FF" stopOpacity="0" />
                </radialGradient>

                <radialGradient id={violetId}>
                    <stop offset="0%" stopColor="#8A7DFF" />
                    <stop offset="100%" stopColor="#6F5CFF" stopOpacity="0" />
                </radialGradient>

                <radialGradient id={pinkId}>
                    <stop offset="0%" stopColor="#FF72E6" />
                    <stop offset="100%" stopColor="#F23DCE" stopOpacity="0" />
                </radialGradient>

                <radialGradient id={orangeId}>
                    <stop offset="0%" stopColor="#FFC36A" />
                    <stop offset="100%" stopColor="#FF8C3A" stopOpacity="0" />
                </radialGradient>
            </defs>

            <g clipPath={`url(#${clipId})`}>
                {/* Base so there can never be transparent holes */}
                <rect width="762" height="716" fill="#8175FF" />

                <circle cx="130" cy="120" r="470" fill={`url(#${cyanId})`} />

                <circle cx="570" cy="120" r="470" fill={`url(#${violetId})`} />

                <circle cx="620" cy="540" r="470" fill={`url(#${pinkId})`} />

                <circle cx="180" cy="600" r="430" fill={`url(#${orangeId})`} />
            </g>
        </svg>
    );
}
