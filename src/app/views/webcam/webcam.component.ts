import { Component, OnInit, ViewChild, ElementRef  } from '@angular/core';
//import { jsmpeg } from 'jsmpeg'

declare var JSMpeg : any;

@Component({
  selector: 'app-webcam',
  templateUrl: './webcam.component.html',
  styleUrls: ['./webcam.component.scss']
})


export class WebcamComponent implements OnInit {


  @ViewChild('video') myCanvas: ElementRef;
  @ViewChild('container') myVideo: ElementRef;
  public context: CanvasRenderingContext2D;

  constructor() {
    var url = 'ws://'+document.location.hostname+':8082/';
    var that = this;
    var player = new JSMpeg.Player(url, {
      canvas: that.myCanvas
    });
  }

  // constructor() {
	// 	var canvas = document.getElementById('video-canvas');
	// 	var url = 'ws://'+document.location.hostname+':8082/';
	// 	var player = new JSMpeg.Player(url, {canvas: canvas});
  // }

  ngAfterViewInit(): void {
    this.context = (<HTMLCanvasElement>this.myCanvas.nativeElement).getContext('2d');
    var stream = this.myCanvas.nativeElement.captureStream(30);
    this.myVideo.nativeElement.srcObject = stream;
    this.myVideo.nativeElement.play();
  }

  ngOnInit() {
  }

}
