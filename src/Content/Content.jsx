import React from 'react'
import './Content.css'
const Content = () => {
  return (
    <div>
        
       <div class="box text-center" dir="ltr">
    <h4 class="display-2 text-center main">Neu player</h4>
    <div class="neo-video-player" id="popout-video-player">

        <div class="video-control-part">
            <div class="video-control-general-part">
                <div class="play-btn video-neu-btn"></div>
                <div class="video-neu-btn drop-btn">
                    <div class="box-sound">
                        <div class="volume">
                            <div class="bar-volume"></div>
                        </div>
                    </div>
                    <div class="sound-btn video-neu-btn"></div>
                </div>
            </div>
            <div class="video-control-bar-part">
                <div class="bar-bg">
                    <div class="bar-progress">
                        <div class="bar-time">
                            <div class="bar-time-box"><span class="current">00:00</span><span> / </span><span class="duration">00:00</span></div>
                            <div class="bar-pin"></div>
                        </div>
                    </div>
                    <div class="bar-buffer"></div>
                </div>
            </div>
            <div class="video-control-nav-part">
                <a id="download-video" href=""  rel="nofollow" download><div class="download-btn video-neu-btn"></div></a>
                <div class="setting-btn video-neu-btn">
                    <div class="fastFwd-box">
                        <input class="btn fastFwd" type="button" value="Speed : 1x" />
                    </div>
                </div>
                <div class="fullscreen-btn video-neu-btn"></div>
            </div>
        </div>
        
        <video class="video-element" id="video-element" preload="auto">
        <source src="https://as11.cdn.asset.aparat.com/aparat-video/723e05fcf4f6b4b7d2656fde3814a1bd26823913-240p.mp4?wmsAuthSign=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ0b2tlbiI6IjQ2NTQ2OTFkMWFkNDcyMzVjOWVlYWQ2ZThhZjIwZDIzIiwiZXhwIjoxNjA1NTMyNzg1LCJpc3MiOiJTYWJhIElkZWEgR1NJRyJ9.uVLXSsd5vResRblUl28ZwPPJNXv56f3sm8U0aSlrX-E" />
        </video>
        
        </div>

       
        
</div>
</div>


    
  )
}

export default Content