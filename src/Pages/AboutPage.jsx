
import CustomAlert from "../components/CustomAlert/CustomAlert";
import { motion } from "framer-motion";
import AnimatedPage from "../components/AnimatedPage/AnimatedPage";
import {Tooltip,Zoom} from "@mui/material"
import { useSharedDataContext } from "../Hooks/Context/useSharedData";


const AboutPage = () => {
  
  const sharedContent = useSharedDataContext();    
const resetData = ()=>{
    sharedContent.resetData()
}
  const handleReset = () => {
    CustomAlert(resetData)
  };

  return (<>
    <AnimatedPage>
      
      <div className="flex flex-col items-center justify-center my-12">
        <div className="w-4/5 border-2 border-aboutBorder ">
          <h2 className="mx-8 my-4 text-4xl font-semibold text-center">About</h2>{" "}
          <hr className="border-aboutBorder" />
          <div className="px-16 mx-4 my-4 text-2xl leading-10 text-center ">
            DSA Tracker empowers you to sharpen your problem-solving skills,
            tackle coding challenges, and prepare with confidence for your job
            placements.
            <br />
            We have Senku, a robotic guide designed to assist you as you navigate
            our site. <br />
            Our platform acts as a central hub for monitoring your journey in
            developing essential DSA skills, allowing you to monitor your progress
            and mastery of this crucial skill set
          </div>
        </div>
        <h3 className="mx-8 my-4 mt-6 text-4xl font-semibold text-center">
          Credits
        </h3>
        <div className="px-16 mx-4 mt-2 text-2xl text-center">
          DSA tracker was inspired by{" "}
          <a
            href="https://450dsa.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            450DSA
          </a>{" "}
          and based on{" "}
          <a
            href="https://drive.google.com/file/d/1FMdN_OCfOI0iAeDlqswCiC2DZzD4nPsb/view"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            DSA Cracker Sheet
          </a>{" "}
          by{" "}
          <a
            href="https://www.linkedin.com/in/love-babbar-38ab2887/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            {" "}
            Love Babbar
          </a>
        </div>
        <div className="mx-8 mb-6 text-2xl text-center">
          Created by{" "}
          <a
            href="https://www.linkedin.com/in/mohit-gupta-a8ab6b1b3/"
            target="_blank"
            rel="noopener noreferrer"
            className="font-semibold text-cyan-400 hover:underline "
          >
            Mohit
          </a>
        </div>
        <div className="flex items-center w-1/2 m-8 justify-evenly">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className=" bg-red-400 px-3 py-1  font-bold text-[#242424] text-lg rounded-xl "
            onClick={() => handleReset()}
          >
            Reset your progress
          </motion.button>
          <a
            href="https://github.com/MohitGupta12/Dsa_Tracker/issues"
            target="_blank"
            rel="noopener noreferrer"
          >
            <motion.button
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              className="px-3 py-1 text-lg font-bold text-[#242424] bg-green-400 rounded-xl "
            >
              Contribute to Project
            </motion.button>
          </a>
        </div>
          <div className="fixed " >
            <div className=" fixed right-0 h-[300px] w-[300px]">
          <Tooltip TransitionComponent={Zoom} title="Coming Soon" arrow placement="top-start">
            <svg width="300" height="300" viewBox="0 0 792 873" fill="none" xmlns="http://www.w3.org/2000/svg">
              <g filter="url(#filter0_f_101_3)">
              <ellipse cx="439.439" cy="726.557" rx="130.571" ry="24.5" transform="rotate(-0.0249816 439.439 726.557)" fill="black" fillOpacity="0.12"/>
              </g>
              <path d="M538.386 572.472C553.396 598.243 532.542 645.889 518.284 654.193C504.026 662.497 450.565 658.134 435.556 632.363C420.546 606.592 439.082 584.598 467.955 567.781C496.828 550.965 523.376 546.701 538.386 572.472Z" fill="#A0DDE8" stroke="#095679" strokeWidth="6"/>
              <g filter="url(#filter1_f_101_3)">
              <path d="M438.4 631.285C454.153 656.383 506.115 660.123 517.277 652.465C528.44 644.807 537.766 621.575 540.561 603.029C528.171 625.825 522.382 634.062 503.143 638.131C473.628 641.23 462.173 636.865 438.4 631.285Z" fill="#51A1B8"/>
              </g>
              <g filter="url(#filter2_f_101_3)">
              <path d="M468.539 569.777C464.218 572.293 446.072 582.862 434.716 601.116C462.965 580.743 484.332 570.394 515.183 556.476C496.441 554.699 472.86 567.261 468.539 569.777Z" fill="#59A6B1"/>
              </g>
              <path d="M495.137 554.843C495.137 554.843 509.125 573.891 519.29 603.267C529.456 632.642 518.284 654.193 518.284 654.193" stroke="#095679" strokeWidth="3"/>
              <g filter="url(#filter3_f_101_3)">
              <path d="M532.845 569.913C527.277 560.719 517.62 557.236 508.92 556.652C534.428 567.651 537.403 598.893 532.66 630.197C539.374 614.1 544.89 585.826 532.845 569.913Z" fill="#C5F5F5"/>
              </g>
              <path d="M485.862 400.984C476.07 420.323 499.337 451.727 537.83 471.125C576.323 490.524 619.32 483.322 625.258 471.234C631.196 459.145 614.268 425.695 574.954 400.043C535.639 374.391 495.655 381.646 485.862 400.984Z" fill="#89C4D6" stroke="#095679" strokeWidth="6"/>
              <g filter="url(#filter4_f_101_3)">
              <path d="M556.525 393.478C537.619 385.778 527.635 385.508 511.511 387.871C511.511 387.871 526.954 385.82 550.464 397.009C573.973 408.197 584.168 419.039 602.449 438.48C620.73 457.921 621.168 458.733 623.347 467.391C622.676 458.127 621.689 452.501 608.944 434.697C593.538 417.364 584.513 406.687 556.525 393.478Z" fill="#BAEDF0"/>
              </g>
              <g filter="url(#filter5_f_101_3)">
              <path d="M533.038 451.712C534.069 447.495 517.007 394.455 507.404 386.792C529.977 381.745 555.126 389.085 574.747 404.853C570.845 423.94 573.201 441.923 579.229 465.313C565.212 473.488 537.866 460.3 533.038 451.712Z" fill="#4F9DB6"/>
              </g>
              <path d="M623.787 471.04C623.787 471.04 603.84 443.848 563.334 421.787C522.828 399.727 490.119 398.24 490.119 398.24" stroke="#095679" strokeWidth="3"/>
              <path d="M88.5807 402.218C39.6603 318.224 68.0933 210.475 152.088 161.555L277.385 88.5784C361.379 39.658 469.128 68.0911 518.048 152.085L535.663 182.33C574.855 249.62 552.077 335.942 484.786 375.134L299 483.34C231.709 522.532 145.388 499.753 106.196 432.462L88.5807 402.218Z" fill="url(#paint0_linear_101_3)" stroke="#095679" strokeWidth="6"/>
              <path d="M88.5807 402.218C39.6603 318.224 68.0933 210.475 152.088 161.555L277.385 88.5784C361.379 39.658 469.128 68.0911 518.048 152.085L525.598 165.047C564.79 232.338 542.011 318.659 474.72 357.851L288.934 466.058C221.643 505.25 135.322 482.471 96.13 415.18L88.5807 402.218Z" fill="url(#paint1_linear_101_3)" stroke="#095679" strokeWidth="3"/>
              <path d="M113.146 372.866C76.456 309.871 97.7807 229.059 160.776 192.369L297.73 112.604C359.536 76.6064 438.768 96.3836 476.407 157.204L497.22 190.833C497.22 190.833 513.899 220.465 497.742 269.222C481.585 317.978 441.408 334.435 441.408 334.435C441.408 334.435 417.716 296.736 339.404 344.083C261.092 391.43 278.954 429.052 278.954 429.052C278.954 429.052 246.402 452.64 197.46 444.113C148.519 435.586 131.265 403.975 131.265 403.975L113.146 372.866Z" fill="#0F3035" stroke="#095679" strokeWidth="4"/>
              <g filter="url(#filter6_f_101_3)">
              <path d="M430.531 345.978C439.704 361.726 408.491 379.066 371.505 400.608C334.519 422.149 302.741 441.497 293.568 425.748C284.395 409.999 306.838 374.623 343.824 353.081C380.811 331.539 421.359 330.229 430.531 345.978Z" fill="#1FD0BB"/>
              </g>
              <circle cx="184.175" cy="292.151" r="40.5" transform="rotate(-30.2176 184.175 292.151)" fill="#1FD0BB" stroke="#696969"/>
              <rect x="250.95" y="274.669" width="83" height="86" rx="10.5" transform="rotate(-30.2176 250.95 274.669)" fill="#6E3232" stroke="#696969"/>
              <rect x="166.532" y="356.239" width="95" height="44" rx="10.5" transform="rotate(-30.2176 166.532 356.239)" fill="#4F472E" stroke="#696969"/>
              <rect x="349.231" y="234.786" width="95" height="44" rx="10.5" transform="rotate(-30.2176 349.231 234.786)" fill="#177B70" stroke="#696969"/>
              <rect x="336.649" y="213.183" width="95" height="19" rx="9.5" transform="rotate(-30.2176 336.649 213.183)" fill="#452C3B" stroke="#696969"/>
              <rect x="322.557" y="188.987" width="95" height="22" rx="10.5" transform="rotate(-30.2176 322.557 188.987)" fill="#154D69" stroke="#696969"/>
              <rect x="373.532" y="278.495" width="95" height="33" rx="10.5" transform="rotate(-30.2176 373.532 278.495)" fill="#5C4133" stroke="#696969"/>
              <rect x="192.199" y="400.309" width="95" height="19" rx="9.5" transform="rotate(-30.2176 192.199 400.309)" fill="#095369" stroke="#696969"/>
              <path d="M456.696 135.164C440.367 118.057 421.249 109.551 414.866 107.004C426.634 114.288 460.077 171.297 468.889 199.812C477.701 228.327 476.195 239.904 473.414 267.19C471.361 287.336 462.294 317.641 459.161 321.202C477.203 306.188 484.658 294.637 495.15 270.731C499.342 257.371 501.626 249.742 502.879 230.355C503.166 216.368 502.408 208.303 495.311 192.523C494.763 190.774 473.024 152.271 456.696 135.164Z" fill="#9DDBE9" fillOpacity="0.28"/>
              <path d="M113.794 373.979L131.265 403.975C131.265 403.975 148.519 435.586 197.46 444.113C197.46 444.113 174.447 413.541 175.339 371.361C176.228 329.365 193.678 280.351 198.597 266.535L198.661 266.356C203.49 252.791 238.229 191.234 255.412 169.075C272.595 146.916 315.236 105.88 315.236 105.88L162.535 192.842C98.7508 229.167 76.852 310.55 113.794 373.979Z" fill="#9DDBE9" fillOpacity="0.28"/>
              <path d="M199.525 523.539C198.228 540.255 230.198 568.077 273.167 571.388C316.135 574.699 348.093 567.231 350.038 542.172C351.984 517.112 331.554 497.705 288.585 494.394C245.616 491.083 200.822 506.824 199.525 523.539Z" fill="#89C4D6"/>
              <path d="M199.525 523.539C198.228 540.255 230.198 568.077 273.167 571.388C316.135 574.699 348.093 567.231 350.038 542.172M199.525 523.539C200.822 506.824 245.616 491.083 288.585 494.394C331.554 497.705 351.984 517.112 350.038 542.172M199.525 523.539C199.525 523.539 242.067 505.127 281.776 512.667C321.484 520.206 350.038 542.172 350.038 542.172" stroke="#095679" strokeWidth="6"/>
              <g filter="url(#filter7_f_101_3)">
              <path d="M255.065 565.219C241.96 563.594 210.001 547.49 202.962 528.445C222.951 560.778 303.853 567.471 351.512 544.921C336.109 574.143 278.572 571.78 255.065 565.219Z" fill="#C5F5F5"/>
              </g>
              <g filter="url(#filter8_f_101_3)">
              <path d="M271.584 497.157C255.596 502.214 247.309 503.115 232.979 503.44C256.256 513.576 271.951 513.056 285.883 531.647C294.261 545.103 289.621 560.197 290.528 569.446C311.147 568.987 326.973 567.333 341.632 558.776C333.538 551.44 323.945 547.441 312.706 533.962C300.531 516.927 295.252 508.264 295.42 498.319C286.805 496.635 281.582 496.394 271.584 497.157Z" fill="#4F9DB6"/>
              </g>
              <path d="M200.304 521.892C242.909 507.647 266.65 506.727 308.687 520.101" stroke="#095679" strokeWidth="6"/>
              <path d="M305.84 521.728C295.682 507.065 301.361 487.751 316.775 478.774L474.131 387.126C487.49 379.345 504.425 381.678 512.674 394.754C521.388 408.566 531.189 428.697 535.047 453.484C542.644 502.293 532.038 539.716 532.038 539.716C532.038 539.716 502.781 534.189 465.876 556.263C428.97 578.336 416.246 607.156 416.246 607.156C416.246 607.156 378.462 597.917 343.213 565.213C327.29 550.441 314.776 534.628 305.84 521.728Z" fill="#9DDBE9" stroke="#095679" strokeWidth="6"/>
              <g filter="url(#filter9_f_101_3)">
              <path d="M491.76 386.116C497.028 395.16 464.042 438.134 413.275 467.702C362.508 497.27 308.818 514.105 303.55 505.062C296.964 486.967 343.433 464.52 394.2 434.952C444.967 405.383 470.779 383.87 491.76 386.116Z" fill="#59A6B1"/>
              </g>
              <path d="M435.023 409.903L456.916 447.492C456.916 447.492 471.924 447.431 480.983 462.985C490.042 478.539 478.334 495.195 478.334 495.195L490.65 537.204" stroke="#095679" strokeWidth="3"/>
              <path d="M382.136 592.305C382.136 592.305 387.91 570.426 426.187 541.767C464.465 513.109 484.691 514.058 484.691 514.058" stroke="#095679" strokeWidth="3"/>
              <g filter="url(#filter10_f_101_3)">
              <path d="M496.475 386.263C489.812 385.91 486.275 385.197 478.623 387.403C492.417 408.468 495.632 417.456 498.712 431.829C509.901 480.785 509.607 500.825 506.56 533.724C515.276 533.527 520.118 534.431 529.773 535.827C532.232 525.266 533.145 519.016 534.003 507.325L534.043 506.602C534.661 495.268 535.019 488.694 534.241 475.942C532.188 448.705 529.212 436.478 521.611 418.492C518.307 411.372 518.414 410.136 509.893 396.385C506.588 392.307 505.355 389.98 496.475 386.263Z" fill="#C5F5F5"/>
              </g>
              <defs>
              <filter id="filter0_f_101_3" x="296.868" y="690.057" width="285.142" height="73" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="6" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter1_f_101_3" x="433.4" y="598.029" width="112.161" height="62.9819" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter2_f_101_3" x="430.716" y="552.305" width="88.467" height="52.8115" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter3_f_101_3" x="505.92" y="553.652" width="37.0227" height="79.5452" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="1.5" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter4_f_101_3" x="506.511" y="381.562" width="121.835" height="90.8289" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter5_f_101_3" x="502.404" y="380.215" width="81.825" height="92.6685" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter6_f_101_3" x="283.517" y="327.367" width="156.632" height="112.129" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter7_f_101_3" x="194.962" y="520.445" width="164.55" height="56.95" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter8_f_101_3" x="224.979" y="488.744" width="124.653" height="88.7019" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter9_f_101_3" x="297.925" y="380.955" width="199.386" height="131.552" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="2.5" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <filter id="filter10_f_101_3" x="470.623" y="377.866" width="72.0627" height="165.961" filterUnits="userSpaceOnUse" color-interpolation-filters="sRGB">
              <feFlood flood-opacity="0" result="BackgroundImageFix"/>
              <feBlend mode="normal" in="SourceGraphic" in2="BackgroundImageFix" result="shape"/>
              <feGaussianBlur stdDeviation="4" result="effect1_foregroundBlur_101_3"/>
              </filter>
              <linearGradient id="paint0_linear_101_3" x1="544.144" y1="308.159" x2="73.9516" y2="267.819" gradientUnits="userSpaceOnUse">
              <stop stop-color="#52A7C0"/>
              <stop offset="1" stop-color="#0E5064"/>
              </linearGradient>
              <linearGradient id="paint1_linear_101_3" x1="536.428" y1="275.042" x2="64.1993" y2="265.977" gradientUnits="userSpaceOnUse">
              <stop offset="0.473958" stop-color="#83C1CE"/>
              <stop offset="1" stop-color="#90C8D3"/>
              </linearGradient>
              </defs>
            </svg>
          </Tooltip>
            </div>
          </div>
      </div>
    </AnimatedPage>
  </> );
};

export default AboutPage;
