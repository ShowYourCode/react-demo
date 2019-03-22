import React, { Component } from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router, Route, Link } from "react-router-dom"

import { Layout, Menu, Icon } from 'antd'

import './../assets/css/Home.css'

import Myheader from './Header'
import Pageone from './Pageone'
import Pagetwo from './Pagetwo'
import Pagethree from './Pagethree'


const { Header, Sider, Content } = Layout;

class Home extends Component {
    constructor(props) {
        super(props)
        this.state = {
            collapsed: false,
            defaultItemKey: '0',
            textTitle: '父组件的数据',
            menulist: [
                {
                    icon: 'user',
                    title: '菜单1',
                    url: '/home/'
                },
                {
                    icon: 'video-camera',
                    title: '菜单2',
                    url: '/home/pagetwo'
                },
                {
                    icon: 'upload',
                    title: '菜单3',
                    url: '/home/pagethree'
                },
                {
                    icon: 'upload',
                    title: '菜单4',
                    url: '/home/pagefour'
                },
                {
                    icon: 'box-plot',
                    title: '菜单5',
                    url: '/home/pagefive'
                },
                {
                    icon: 'fund',
                    title: '菜单6',
                    url: '/home/pagesix'
                },
            ]
        }
    }
    toggle = () => {
        this.setState({
            collapsed: !this.state.collapsed,
        });
    }
    componentWillMount() {
        if(this.props.location) {
            this.state.menulist.forEach((value, index) => {
                if(value.url === this.props.location.pathname) {
                    this.setState({
                        defaultItemKey: `${index}`
                    })
                }
            })
        }
    }
    componentDidMount() {
        this.refs.homeContainer.style.height = document.documentElement.clientHeight + 'px'
        console.log(this.state.defaultItemKey)
    }
    render() {
        return (
            <Router>
                <div className="home-container" ref="homeContainer">
                    <Layout>
                        <Sider
                            trigger={null}
                            collapsible
                            collapsed={this.state.collapsed}
                            >
                            <div className="logo">logo</div>
                            <Menu theme="dark" mode="inline" defaultSelectedKeys={[this.state.defaultItemKey]}>
                                {/* <Menu.Item key="1">
                                    <Icon type="user" />
                                    <span>nav 1</span>
                                </Menu.Item>
                                <Menu.Item key="2">
                                <Icon type="video-camera" />
                                <span>nav 2</span>
                                </Menu.Item>
                                <Menu.Item key="3">
                                <Icon type="upload" />
                                <span>nav 3</span>
                                </Menu.Item> */}
                                {
                                    this.state.menulist.map((value, index) => {
                                        return (
                                            <Menu.Item key={index}>
                                                <Link to={value.url}>
                                                        <Icon type={value.icon} />
                                                        <span>{value.title}</span>
                                                </Link>
                                            </Menu.Item>
                                            
                                        )
                                    })
                                }
                            </Menu>
                        </Sider>
                        <Layout>
                            <Header style={{ background: '#fff', padding: 0 }}>
                                
                                <div className="home-header-container">
                                    <div className="home-header-container-toggle">
                                        <Icon
                                            className="trigger"
                                            type={this.state.collapsed ? 'menu-unfold' : 'menu-fold'}
                                            onClick={this.toggle}
                                        />
                                    </div>
                                    <Myheader  textTitle = { this.state.textTitle }/>
                                </div>
                            </Header>
                            <Content style={{
                                margin: '24px 16px', padding: 24, background: '#fff', minHeight: 280,
                            }}
                            >
                            
                                <Route exact path="/home/" component={ Pageone }/>
                                <Route path="/home/pagetwo" component={ Pagetwo }/>
                                <Route path="/home/pagethree" component={ Pagethree }/>
                            </Content>
                        </Layout>
                    </Layout>
                </div>
            </Router>
        )
    }
}

ReactDOM.render(<Home />, document.getElementById('root'))
export default Home