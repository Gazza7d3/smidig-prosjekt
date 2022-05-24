export const BadgeShape = ({color}) => {
    return (
        <div style={{display: "flex", flex: 1, alignItems: "center", justifyContent: "center"}}>
                    <svg width="120" height="116" viewBox="0 0 120 116" fill="none" xmlns="http://www.w3.org/2000/svg">
            <g filter="url(#filter0_bd_479_2212)">
            <path d="M104.324 53.9832L114.383 44.4899C117.382 41.7526 115.983 36.888 112.05 35.9809L98.3455 32.608L102.209 19.5268C103.301 15.7641 99.6213 12.215 95.7205 13.268L82.1593 16.9947L78.6628 3.77503C77.7375 0.0416484 72.6362 -1.32375 69.8417 1.52475L60.0001 11.3L50.1587 1.52496C47.3959 -1.29126 42.2734 -0.000961065 41.3376 3.77524L37.8411 16.9949L24.2797 13.2683C20.3778 12.2148 16.6998 15.7651 17.7913 19.527L21.6547 32.6083L7.94997 35.9811C4.01509 36.8884 2.61968 41.7539 5.617 44.4899L15.6762 53.9832L5.617 63.4762C2.61837 66.2135 4.01662 71.0782 7.94975 71.9852L21.6545 75.3581L17.7911 88.4393C16.6993 92.202 20.3787 95.7511 24.2795 94.6981L37.8407 90.9714L41.3372 104.191C42.3082 108.109 47.3957 109.257 50.1583 106.441L60.0001 96.738L69.8415 106.441C72.5759 109.286 77.7137 108.02 78.6626 104.191L82.1591 90.9714L95.7203 94.6981C99.6219 95.7515 103.3 92.2012 102.209 88.4393L98.3453 75.3581L112.05 71.9852C115.985 71.0777 117.38 66.2125 114.383 63.4762L104.324 53.9832Z" fill={color}  shape-rendering="crispEdges"/>
            </g>
            <defs>
                
            <filter id="filter0_bd_479_2212" x="-76" y="-80" width="272" height="268" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
            <feFlood flood-opacity="0" result="BackgroundImageFix"/>
            <feGaussianBlur in="BackgroundImage" stdDeviation="40"/>
            <feComposite in2="SourceAlpha" operator="in" result="effect1_backgroundBlur_479_2212"/>
            <feColorMatrix in="SourceAlpha" type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0" result="hardAlpha"/>
            <feOffset dy="4"/>
            <feGaussianBlur stdDeviation="2"/>
            <feComposite in2="hardAlpha" operator="out"/>
            <feColorMatrix type="matrix" values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"/>
            <feBlend mode="normal" in2="effect1_backgroundBlur_479_2212" result="effect2_dropShadow_479_2212"/>
            <feBlend mode="normal" in="SourceGraphic" in2="effect2_dropShadow_479_2212" result="shape"/>
            </filter>
            </defs>
            </svg>
        </div>
    )
}