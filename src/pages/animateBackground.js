/*
 * Revision History:
 *     Initial: 2017/10/21        Wang RiYu
 */

import React       from 'react';

class Canvas extends React.Component {
  constructor (props) {
    super(props)
  }

  componentDidMount () {
    var w = c.width = window.innerWidth, h = c.height = window.innerHeight, ctx = c.getContext( '2d' ),
      minDist = 10, maxDist = 30, initialWidth = 10, maxLines = 50, initialLines = 4, speed = 3,

      lines = [], frame = 0, timeSinceLast = 0,

      dirs = [
        // straight x, y velocity
        [ 0, 1 ],
        [ 1, 0 ],
        [ 0, -1 ],
        [ -1, 0 ],
        // diagonals, 0.7 = sin(PI/4) = cos(PI/4)
        [ .7, .7 ],
        [ .7, -.7 ],
        [ -.7, .7 ],
        [ -.7, -.7]
      ],

      starter = {
        x: w / 2,
        y: h / 2,
        vx: 0,
        vy: 0,
        width: initialWidth
      };

    function init() {
      lines.length = 0;

      for( var i = 0; i < initialLines; ++i )
        lines.push( new Line( starter ) );

      ctx.fillStyle = '#eee';
      ctx.fillRect( 0, 0, w, h );
    }
    function getColor( x ) {
      return 'hsl( hue, 80%, 50% )'.replace(
        'hue', x / w * 360 + frame
      );
    }
    function anim() {
      window.requestAnimationFrame( anim );

      ++frame;

      ctx.shadowBlur = 0;
      ctx.fillStyle = 'rgba(220,220,220,.02)';
      ctx.fillRect( 0, 0, w, h );
      ctx.shadowBlur = .5;

      for( var i = 0; i < lines.length; ++i )
        if( lines[ i ].step() ) {
          lines.splice( i, 1 );
          --i;
        }

      ++timeSinceLast

      if( lines.length < maxLines && timeSinceLast > 10 && Math.random() < .5 ) {
        timeSinceLast = 0;

        lines.push( new Line( starter ) );

        // cover the middle;
        ctx.fillStyle = ctx.shadowColor = getColor( starter.x );
        ctx.beginPath();
        ctx.arc( starter.x, starter.y, initialWidth, 0, Math.PI * 2 );
        ctx.fill();
      }
    }

    function Line( parent ) {
      this.x = parent.x | 0;
      this.y = parent.y | 0;
      this.width = parent.width / 1.25;

      do {
        var dir = dirs[ ( Math.random() * dirs.length ) |0 ];
        this.vx = dir[ 0 ];
        this.vy = dir[ 1 ];
      } while (
        ( this.vx === -parent.vx && this.vy === -parent.vy ) || ( this.vx === parent.vx && this.vy === parent.vy) );
      this.vx *= speed;
      this.vy *= speed;
      this.dist = ( Math.random() * ( maxDist - minDist ) + minDist );
    }

    Line.prototype.step = function() {
      var dead = false;
      var prevX = this.x, prevY = this.y;

      this.x += this.vx;
      this.y += this.vy;

      --this.dist;

      // kill if out of screen
      if( this.x < 0 || this.x > w || this.y < 0 || this.y > h )
        dead = true;

      // make children :D
      if( this.dist <= 0 && this.width > 1 ) {

        // keep yo self, sometimes
        this.dist = Math.random() * ( maxDist - minDist ) + minDist;

        // add 2 children
        if( lines.length < maxLines ) lines.push( new Line( this ) );
        if( lines.length < maxLines && Math.random() < .5 ) lines.push( new Line( this ) );

        // kill the poor thing
        if( Math.random() < .2 ) dead = true;
      }

      ctx.strokeStyle = ctx.shadowColor = getColor( this.x );
      ctx.beginPath();
      ctx.lineWidth = this.width;
      ctx.moveTo( this.x, this.y );
      ctx.lineTo( prevX, prevY );
      ctx.stroke();

      if( dead ) return true
    }

    init();
    anim();

    window.addEventListener('resize', function() {
      w = c.width = window.innerWidth;
      h = c.height = window.innerHeight;
      starter.x = w / 2;
      starter.y = h / 2;

      init();
    })
  }

  render () {
    return (
      <canvas id='c' style={{zIndex: 0, position: 'fixed', top: 0, left: 0, backgroundColor: 'white'}} />
    )
  }
}

export default Canvas