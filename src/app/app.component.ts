import {AfterViewInit, Component, ElementRef, Inject, ViewChild} from '@angular/core';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import {DOCUMENT} from "@angular/common";
import Scrollbar from 'smooth-scrollbar';

gsap.registerPlugin(ScrollTrigger); // ScrollTrigger를 사용하겠다고 선언

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements AfterViewInit {

  @ViewChild('secondSection', {static : true}) secondSection: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('menu', {static : true}) menu: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('menuSecond', {static : true}) menuSecond: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('imageFirst', {static : true}) imageFirst: ElementRef<HTMLDivElement> | undefined;
  @ViewChild('imageSecond', {static : true}) imageSecond: ElementRef<HTMLDivElement> | undefined;

  constructor(
    @Inject(DOCUMENT) private document: Document
  ) {
  }

  ngOnInit(){

    let bodyScrollBar: any =
      Scrollbar.init(document.body, {
      damping: 0.05,
      delegateTo: document,
      renderByPixels: true,});

    ScrollTrigger.scrollerProxy(document.body, {
      scrollTop(value) {
        if (arguments.length) {
          bodyScrollBar.scrollTop = value;
        }
        return bodyScrollBar.scrollTop;
      }
    });
    ScrollTrigger.defaults({scroller: document.body});
    bodyScrollBar.addListener(ScrollTrigger.update);
  }


  initScrollAnimations(): void {

    if(this.imageFirst && this.imageSecond){
      gsap.to(this.imageFirst.nativeElement, {
        scrollTrigger: {
          trigger: this.imageFirst.nativeElement,
          scrub: true, // GSAP ScrollTrigger의 이벤트가 스크롤이 사용될 때만 재생되도록 만들어주는 속성
          start: '110% center',
        } as gsap.plugins.ScrollTriggerInstanceVars,
        duration: 1.1,
        scale: 1.2,
        height: 250,
      });
      gsap.to(this.imageSecond.nativeElement, {
        scrollTrigger: {
          trigger: this.imageSecond.nativeElement,
          scrub: true,
          start: '80% center',
        } as gsap.plugins.ScrollTriggerInstanceVars,
        duration: 1.1,
        scale: 1.2,
        height: 380,
      });
    }

    gsap.to(this.document.querySelector('.heading-1'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.heading-1'),
        scrub: true,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.paragraph'),
        scrub: true,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#fff',
      duration: 1.5,
    });
    gsap.to(this.document.querySelector('.btn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.btn'),
        scrub: true,
        start: '150% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      color: '#fff',
      duration: 1.5,
    });

    gsap.from(this.document.querySelector('#about'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#about'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('#buy'), {
      scrollTrigger: {
        trigger: this.document.querySelector('#buy'),
        scrub: true,
        toggleClass: 'active',
        start: 'top center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.box'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.box'),
        scrub: true,
        toggleClass: 'active',
        start: '-10% center',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      width: 0,
      opacity: 0,
    });

    const images : any = this.document.querySelector('.info-1__visual');

    let timeline = gsap.timeline({
      scrollTrigger:{
        trigger: this.secondSection?.nativeElement,
        start: 'top top',
        end: () => '+=' + (images.offsetHeight * 2),
        scrub: true,
        pin: true,
        pinType: 'transform',
        scroller: document.body
      }
    });

    timeline.to(images,{
      x: '-2000px',
      duration: 10,
    })

    // gsap.from(this.document.querySelector('.info-1__visual'), {
    //   scrollTrigger: {
    //     trigger: this.document.querySelector('.info-1__visual'),
    //     scrub: true,
    //     toggleClass: 'active',
    //     start: '-60% bottom',
    //   } as gsap.plugins.ScrollTriggerInstanceVars,
    //   duration: 1.5,
    //   height: 0,
    //   scale: '1.3',
    //   opacity: 0,
    // });

    gsap.from(this.document.querySelector('.quote'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.quote'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .heading-3'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .heading-3'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .paragraph'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .paragraph'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
    gsap.from(this.document.querySelector('.info-1__text .btn--learn'), {
      scrollTrigger: {
        trigger: this.document.querySelector('.info-1__text .btn--learn'),
        scrub: true,
        toggleClass: 'active',
        start: '-60% bottom',
      } as gsap.plugins.ScrollTriggerInstanceVars,
      duration: 1.5,
      y: 40,
      opacity: 0,
    });
  }

  initialAnimations(): void {

    if(this.menu && this.menuSecond && this.imageFirst && this.imageSecond){
      gsap.from(this.menu.nativeElement.childNodes, {
        duration: 0.5,
        opacity: 0,
        x: -20,
        stagger: 0.2, // 주르르륵 나오게 하는 것
        delay: 0.5,
      });
      gsap.from(this.menuSecond.nativeElement.childNodes, {
        duration: 0.5,
        opacity: 0,
        y: -20,
        stagger: 0.2,
        delay: 0.8,
      });
      gsap.from(this.imageFirst.nativeElement, {
        duration: 0.7,
        opacity: 0,
        y: -30,
        delay: 0.5,
      });
      gsap.from(this.imageSecond.nativeElement, {
        duration: 0.7,
        opacity: 0,
        y: -30,
        delay: 0.6,
      });
    }

    gsap.from(this.document.querySelector('.heading-1'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.6,
    });
    gsap.from(this.document.querySelector('.paragraph'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.7,
    });
    gsap.from(this.document.querySelector('.btn'), {
      duration: 0.7,
      opacity: 0,
      y: -30,
      delay: 0.8,
    });
  }

  ngAfterViewInit(): void {
    this.initScrollAnimations();
    this.initialAnimations();
  }
}
