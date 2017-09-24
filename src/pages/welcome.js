import React from 'react';
import ReactDOM from 'react-dom';
import TweenOne, { TweenOneGroup } from 'rc-tween-one';
import ticker from 'rc-tween-one/lib/ticker';
import Radio from 'antd/lib/radio';
import PropTypes from 'prop-types';
import './welcome.css';
import {
    Route,
    Link
} from 'react-router';
import QueueAnim from 'rc-queue-anim';

const RadioGroup = Radio.Group;

class LogoGather extends React.Component {
    static propTypes = {
        image: PropTypes.string,
        w: PropTypes.number,
        h: PropTypes.number,
        pixSize: PropTypes.number,
        pointSizeMin: PropTypes.number,
    };

    static defaultProps = {
        image: 'https://zos.alipayobjects.com/rmsportal/gsRUrUdxeGNDVfO.svg',
        className: 'logo-gather-demo',
        w: 400,
        h: 400,
        pixSize: 20,
        pointSizeMin: 10,
    };

    constructor(props) {
        super(props);
        this.state = {};
        this.interval = null;
        this.gather = true;
        this.intervalTime = 3000;
    }

    componentDidMount() {
        this.dom = ReactDOM.findDOMNode(this);
        this.createPointData();
    }

    componentWillUnmount() {
        ticker.clear(this.interval);
        this.interval = null;
    }

    onMouseEnter = () => {
        console.log('enteer')
        // !this.gather && this.updateTweenData();
        if (!this.gather) {
            this.updateTweenData();
        }
        this.componentWillUnmount();
    };

    onMouseLeave = () => {
        console.log('leave')
        // this.gather && this.updateTweenData();
        if (this.gather) {
            this.updateTweenData();
        }
        this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
    };

    setDataToDom(data, w, h) {
        this.pointArray = [];
        const number = this.props.pixSize;
        for (let i = 0; i < w; i += number) {
            for (let j = 0; j < h; j += number) {
                if (data[((i + j * w) * 4) + 3] > 150) {
                    this.pointArray.push({ x: i - 50, y: j });
                }
            }
        }
        const children = [];
        this.pointArray.forEach((item, i) => {
            const r = Math.random() * this.props.pointSizeMin + this.props.pointSizeMin;
            const b = Math.random() * 0.4 + 0.1;
            children.push(
                <TweenOne className="point-wrapper" key={i} style={{ left: item.x, top: item.y }}>
                    <TweenOne
                        className="point"
                        style={{
                            width: r,
                            height: r,
                            opacity: b,
                            backgroundColor: `rgb(${Math.round(Math.random() * 95 + 160)},255,255)`,
                        }}
                        animation={{
                            y: (Math.random() * 2 - 1) * 10 || 5,
                            x: (Math.random() * 2 - 1) * 5 || 2.5,
                            delay: Math.random() * 1000,
                            repeat: -1,
                            duration: 3000,
                            yoyo: true,
                            ease: 'easeInOutQuad',
                        }}
                    />
                </TweenOne>
            );
        });
        this.setState({
            children,
            boxAnim: { opacity: 0, type: 'from', duration: 800 },
        }, () => {
            this.interval = ticker.interval(this.updateTweenData, this.intervalTime);
        });
    }

    createPointData = () => {
        const { w, h } = this.props;
        const canvas = document.getElementById('canvas');
        const ctx = canvas.getContext('2d');
        ctx.clearRect(0, 0, w, h);
        canvas.width = this.props.w;
        canvas.height = h;
        const img = new Image();
        img.onload = () => {
            ctx.drawImage(img, 0, 0, img.width, img.height, 0, 0, w, h);
            const data = ctx.getImageData(0, 0, w, h).data;
            this.setDataToDom(data, w, h);
            this.dom.removeChild(canvas);
        };
        img.crossOrigin = 'anonymous';
        img.src = this.props.image;
    };

    gatherData = () => {
        const children = this.state.children.map(item =>
            React.cloneElement(item, {
                animation: {
                    x: 0,
                    y: 0,
                    opacity: 1,
                    scale: 1,
                    delay: Math.random() * 500,
                    duration: 800,
                    ease: 'easeInOutQuint',
                },
            })
        );
        this.setState({ children });
    };

    disperseData = () => {
        const rect = this.dom.getBoundingClientRect();
        const sideRect = this.sideBox.getBoundingClientRect();
        const sideTop = sideRect.top - rect.top;
        const sideLeft = sideRect.left - rect.left;
        const children = this.state.children.map(item =>
            React.cloneElement(item, {
                animation: {
                    x: Math.random() * rect.width - sideLeft - item.props.style.left,
                    y: Math.random() * rect.height - sideTop - item.props.style.top,
                    opacity: Math.random() * 0.4 + 0.1,
                    scale: Math.random() * 2.4 + 0.1,
                    duration: Math.random() * 500 + 500,
                    ease: 'easeInOutQuint',
                },
            })
        );

        this.setState({
            children,
        });
    };

    updateTweenData = () => {
        this.dom = ReactDOM.findDOMNode(this);
        this.sideBox = ReactDOM.findDOMNode(this.sideBoxComp);
        ((this.gather && this.disperseData) || this.gatherData)();
        this.gather = !this.gather;
    };

    render() {
        return (
            <div className="logo-gather-demo-wrapper" style={{height: document.body.clientHeight}}>
                <canvas id="canvas"/>
                <TweenOne
                    animation={this.state.boxAnim}
                    className="right-side blur"
                    onMouseEnter={this.onMouseEnter}
                    onMouseLeave={this.onMouseLeave}
                    ref={(c) => {
                        this.sideBoxComp = c;
                    }}
                >
                    {this.state.children}
                </TweenOne>

                <div className="animate" style={{marginTop: document.body.clientHeight / 2 - 200}}>
                    <QueueAnim delay={1500} className="queue-simple" key="demo"
                               type={['right', 'left']} interval={500}
                               ease={['easeOutQuart', 'easeInOutQuart']} >
                        <span key='a' className='welcome'>Welcome to Lovae's Blog</span>
                        <br/>
                        <div className="linkText" key='b'>
                            <Link to='/home' className='myLink' activeStyle={{color: 'blue', backgroundColor: '#ffffff'}}>
                                Go HomePage
                            </Link>
                        </div>

                    </QueueAnim>
                </div>
            </div>
        );
    }
}

export default class Welcome extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            image: require('../image/background.png'),
            pixSize: 20,
            pointSize: 10,
            isMode: false,
            show: false,
        };
    }

    render(){
        return(
            <div>
                <LogoGather
                    image={this.state.image}
                    pixSize={this.state.pixSize}
                    pointSizeMin={this.state.pointSize}
                />
                {this.props.children}
            </div>

        )
    }
}
