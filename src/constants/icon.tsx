import { SVGProps } from "react";

export const Icons = {
    logo: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width={94}
            height={85}
            fill='none'
            {...props}>
            <path fill='url(#a)' d='M0 0h94v85H0z' />
            <defs>
                <pattern
                    id='a'
                    width={1}
                    height={1}
                    patternContentUnits='objectBoundingBox'>
                    <use
                        xlinkHref='#b'
                        transform='matrix(.00333 0 0 .00369 0 -.005)'
                    />
                </pattern>
                <image
                    xlinkHref='data:image/png;base64,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'
                    id='b'
                    width={300}
                    height={274}
                />
            </defs>
        </svg>
    ),
    UK: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            xmlnsXlink='http://www.w3.org/1999/xlink'
            width={20}
            height={20}
            fill='none'
            {...props}>
            <path fill='url(#a)' d='M0 0h20v20H0z' />
            <defs>
                <pattern
                    id='a'
                    width={1}
                    height={1}
                    patternContentUnits='objectBoundingBox'>
                    <use xlinkHref='#b' transform='scale(.002)' />
                </pattern>
                <image
                    xlinkHref='data:image/png;base64,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'
                    id='b'
                    width={500}
                    height={500}
                />
            </defs>
        </svg>
    ),
    settings: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}>
            <g clipPath='url(#a)'>
                <path
                    fill='#9B74F0'
                    d='M19.14 12.94c.04-.3.06-.61.06-.94 0-.32-.02-.64-.07-.94l2.03-1.58a.49.49 0 0 0 .12-.61l-1.92-3.32c-.12-.22-.37-.29-.59-.22l-2.39.96c-.5-.38-1.03-.7-1.62-.94l-.36-2.54a.484.484 0 0 0-.48-.41h-3.84c-.24 0-.43.17-.47.41l-.36 2.54c-.59.24-1.13.57-1.62.94l-2.39-.96c-.22-.08-.47 0-.59.22L2.74 8.87c-.12.21-.08.47.12.61l2.03 1.58c-.05.3-.09.63-.09.94 0 .31.02.64.07.94l-2.03 1.58a.49.49 0 0 0-.12.61l1.92 3.32c.12.22.37.29.59.22l2.39-.96c.5.38 1.03.7 1.62.94l.36 2.54c.05.24.24.41.48.41h3.84c.24 0 .44-.17.47-.41l.36-2.54c.59-.24 1.13-.56 1.62-.94l2.39.96c.22.08.47 0 .59-.22l1.92-3.32c.12-.22.07-.47-.12-.61l-2.01-1.58ZM12 15.6A3.61 3.61 0 0 1 8.4 12c0-1.98 1.62-3.6 3.6-3.6s3.6 1.62 3.6 3.6-1.62 3.6-3.6 3.6Z'
                />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h24v24H0z' />
                </clipPath>
            </defs>
        </svg>
    ),
    user: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}>
            <g clipPath='url(#a)'>
                <path
                    fill='#9B74F0'
                    d='M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2Zm0 4c1.93 0 3.5 1.57 3.5 3.5S13.93 13 12 13s-3.5-1.57-3.5-3.5S10.07 6 12 6Zm0 14c-2.03 0-4.43-.82-6.14-2.88a9.947 9.947 0 0 1 12.28 0C16.43 19.18 14.03 20 12 20Z'
                />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h24v24H0z' />
                </clipPath>
            </defs>
        </svg>
    ),
    search: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}>
            <g clipPath='url(#a)'>
                <path
                    fill='#9B74F0'
                    d='M15.5 14h-.79l-.28-.27A6.471 6.471 0 0 0 16 9.5 6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19l-4.99-5Zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5 14 7.01 14 9.5 11.99 14 9.5 14Z'
                />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h24v24H0z' />
                </clipPath>
            </defs>
        </svg>
    ),
    filter: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}>
            <g clipPath='url(#a)'>
                <path
                    fill='#9B74F0'
                    d='M4.25 5.61C6.27 8.2 10 13 10 13v6c0 .55.45 1 1 1h2c.55 0 1-.45 1-1v-6s3.72-4.8 5.74-7.39A.998.998 0 0 0 18.95 4H5.04c-.83 0-1.3.95-.79 1.61Z'
                />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h24v24H0z' />
                </clipPath>
            </defs>
        </svg>
    ),
    add: (props: SVGProps<SVGSVGElement>) => (
        <svg
            xmlns='http://www.w3.org/2000/svg'
            width={24}
            height={24}
            fill='none'
            {...props}>
            <g clipPath='url(#a)'>
                <path fill='#9B74F0' d='M19 13h-6v6h-2v-6H5v-2h6V5h2v6h6v2Z' />
            </g>
            <defs>
                <clipPath id='a'>
                    <path fill='#fff' d='M0 0h24v24H0z' />
                </clipPath>
            </defs>
        </svg>
    ),
};
