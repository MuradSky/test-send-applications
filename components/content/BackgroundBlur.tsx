import s from './index.module.scss';

function BackgroundBlur() {
  return (
    <svg viewBox="0 0 1027 364" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.background_blur}>
      <foreignObject x="-19.2207" y="-20" width="1066.22" height="403.706">
        <div 
          style={{ 
            backdropFilter: 'blur(10px)', 
            clipPath: 'url(#bgblur_0_91_3236_clip_path)', 
            height: '100%', 
            width: '100%' 
          }}
        ></div>
      </foreignObject>
      <path 
        data-figma-bg-blur-radius="20" 
        d="M52.5873 24.9959C55.0289 10.5634 67.5295 2.10691e-07 82.167 4.98551e-07L997 1.84896e-05C1013.57 1.88154e-05 1027 13.4315 1027 30V288.86C1027 304.888 1014.4 318.085 998.391 318.828L32.1788 363.673C13.0648 364.56 -1.98347 347.568 1.20826 328.701L52.5873 24.9959Z" 
        fill="black" 
        fillOpacity="0.2" 
      />
      <defs>
        <clipPath id="bgblur_0_91_3236_clip_path" transform="translate(19.2207 20)">
          <path d="M52.5873 24.9959C55.0289 10.5634 67.5295 2.10691e-07 82.167 4.98551e-07L997 1.84896e-05C1013.57 1.88154e-05 1027 13.4315 1027 30V288.86C1027 304.888 1014.4 318.085 998.391 318.828L32.1788 363.673C13.0648 364.56 -1.98347 347.568 1.20826 328.701L52.5873 24.9959Z" />
        </clipPath>
      </defs>
    </svg>
  );
}


function BackgroundBlur2() {
  return (
    <svg viewBox="0 0 1136 335" fill="none" xmlns="http://www.w3.org/2000/svg" className={s.background_blur}>
      <foreignObject x="-20" y="-19.4512" width="1175.69" height="373.85">
        <div
          style={{
            backdropFilter: 'blur(10px)',
            clipPath: 'url(#bgblur_0_144_193_clip_path)',
            height: '100%',
            width: '100%',
          }}
        ></div>
      </foreignObject>
      <path
        data-figma-bg-blur-radius="20"
        d="M1084.71 309.836C1082.09 324.068 1069.68 334.398 1055.21 334.398L30 334.398C13.4315 334.398 0 320.967 0 304.398V75.6665C0 59.587 12.6774 46.3667 28.7428 45.6929L1104.42 0.576111C1123.67 -0.230988 1138.67 17.0461 1135.18 35.9874L1084.71 309.836Z"
        fill="black"
        fillOpacity="0.2"
      />
      <defs>
        <clipPath id="bgblur_0_144_193_clip_path" transform="translate(20 19.4512)">
          <path d="M1084.71 309.836C1082.09 324.068 1069.68 334.398 1055.21 334.398L30 334.398C13.4315 334.398 0 320.967 0 304.398V75.6665C0 59.587 12.6774 46.3667 28.7428 45.6929L1104.42 0.576111C1123.67 -0.230988 1138.67 17.0461 1135.18 35.9874L1084.71 309.836Z" />
        </clipPath>
      </defs>
    </svg>
  );
}

export {
  BackgroundBlur,
  BackgroundBlur2
}