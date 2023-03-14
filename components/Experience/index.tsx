import { Title } from 'components'

export function Experience() {
    return (
        <div className="relative flex w-full flex-col items-center justify-center">
            <Title text="My Experience" />
            <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-4 self-stretch">
                <div className="h-80 w-80 flex-shrink-0 flex-grow-0">
                    <img
                        src="rectangle-16.png"
                        className="absolute left-[223.5px] top-[-0.5px] h-80 w-80 object-cover"
                    />
                    <div className="absolute left-56 top-0 flex h-80 w-80 flex-col items-center justify-center gap-4 bg-[#21201d]/[0.98]">
                        <p className="flex-shrink-0 flex-grow-0 text-left text-[32px] font-bold text-[#ff8303]">
                            News Blog
                        </p>
                        <p className="flex-shrink-0 flex-grow-0 text-left text-base font-medium text-[#f0e3ca]">
                            HTML, SCSS, JS
                        </p>
                        <svg
                            width={200}
                            height={2}
                            viewBox="0 0 200 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 flex-grow-0"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <line y1="0.704163" x2={200} y2="0.704163" stroke="#A35709" />
                        </svg>
                        <p className="w-[219px] flex-shrink-0 flex-grow-0 text-left text-base text-[#f0e3ca]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded bg-[#32312e] px-5 py-3">
                            <p className="flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-[#f0e3ca]">
                                See more →
                            </p>
                        </div>
                    </div>
                </div>
                <div className="h-80 w-80 flex-shrink-0 flex-grow-0">
                    <img
                        src="rectangle-18.png"
                        className="absolute left-[559.5px] top-[-0.5px] h-80 w-80 object-none"
                    />
                </div>
                <div className="h-80 w-80 flex-shrink-0 flex-grow-0">
                    <img
                        src="rectangle-16.png"
                        className="absolute left-[895.5px] top-[-0.5px] h-80 w-80 object-cover"
                    />
                    <div className="absolute left-[896px] top-0 flex h-80 w-80 flex-col items-center justify-center gap-4 bg-[#21201d]/[0.98]">
                        <p className="flex-shrink-0 flex-grow-0 text-left text-[32px] font-bold text-[#ff8303]">
                            News Blog
                        </p>
                        <p className="flex-shrink-0 flex-grow-0 text-left text-base font-medium text-[#f0e3ca]">
                            HTML, SCSS, JS
                        </p>
                        <svg
                            width={200}
                            height={2}
                            viewBox="0 0 200 2"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                            className="flex-shrink-0 flex-grow-0"
                            preserveAspectRatio="xMidYMid meet"
                        >
                            <line y1="0.704163" x2={200} y2="0.704163" stroke="#A35709" />
                        </svg>
                        <p className="w-[219px] flex-shrink-0 flex-grow-0 text-left text-base text-[#f0e3ca]">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                            labore et dolore magna aliqua.
                        </p>
                        <div className="relative flex flex-shrink-0 flex-grow-0 items-center justify-center gap-2.5 rounded bg-[#32312e] px-5 py-3">
                            <p className="flex-shrink-0 flex-grow-0 text-left text-sm font-medium text-[#f0e3ca]">
                                See more →
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
