import React from 'react'
import { Router } from 'react-router'

export default function Player(){
        return (
            <div>
                <iframe id="player" type="text/html" width="0" height="0"
                src="http://www.youtube.com/embed/25SV6zqTl1k?autoplay=1&enablejsapi=1"
                frameBorder="0"></iframe>
                <iframe id="player" type="text/html" width="0" height="0"
                src="http://www.youtube.com/embed/dTp6d7Bw79A?autoplay=1&enablejsapi=1"
                frameBorder="0"></iframe>
            </div>
        )
}
