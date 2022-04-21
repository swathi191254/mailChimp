
export const Footer = () => {
    const related = {
        display:"flex",
        flexDirection : "Row",
        margin: "0px 10px",
    }
    const a = {
        // marginTop:"20px",
        margin: "20px 15px 0px 15px"
    }
    const footer = {
        backgroundColor :"#ebebeb"
    }
    const row = {
        display :"flex",
        flexDirection:"Row",
        margin: "0% 10%",
        padding:"3% 0%"
    }

    const column = {
        display: "flex",
        flexDirection:"Column",
        margin: "0 2%"
    } 

    const least = {
        display: "flex",
        flexDirection:"Row",
        margin: "0% 10%"
    }

    const list3 = {
        display: "flex",
        flexDirection:"Column",
    }

    const list2 = {
        display: "flex",
        flexDirection:"Row",
        margin: "0% 5%",
    }

    const img = {
        width:"20px",
        height:"20px",
        margin : "10px",
        backgroundColor:"black",
        color:"black",
    }

    const list1 = {
        display: "flex",
        flexDirection:"Row",
        margin: "0% 5%",
    }

    const pic = {
        width:"70px",
        height:"40px",
        margin : "10px 20px",
    }


    return (
        <div style={footer}>
            <div style={related}>
                <h3>Related Links</h3>
                <a style={a}>How To Make a Website: a Guide for Building Your Website</a>
                <a style={a}>How To Start an E-Commerce Business - a Complete Guide</a>
                <a style={a}>How To Sell to Any Audience</a>
            </div>
            <hr />
            <div style={row}>
                <div style={column}>
                    <h3>Products</h3>
                    <div>Why Mailchimp</div>
                    <div>Product Updates</div>
                    <div>Email Marketing</div>
                    <div>Websites</div>
                    <div>Transactional Email</div>
                    <div>How we Compare</div>
                    <div>GDPR Compliance</div>
                    <div>Security</div>
                    <div>Status</div>
                    <div>Mobile App</div>
                </div>
                <div style={column}>
                    <h3>Products</h3>
                    <div>Resouces</div>
                    <div>Marketing Library</div>
                    <div>Free Marketing Tools</div>
                    <div>Marrketing Glossary</div>
                    <div>Integration Directory</div>
                </div>
                <div style={column}>
                    <h3>Community</h3>
                    <div>Agencies & Freelancers</div>
                    <div>Developers</div>
                    <div>Events</div>
                </div>
                <div style={column}>
                    <h3>Company</h3>
                    <div>Our Story</div>
                    <div>Newsroom</div>
                    <div>Annual Report</div>
                    <div>Careers</div>
                    <div>Accessibility</div>
                </div>
                <div style={column}>
                    <h3>Help</h3>
                    <div>Contact Us</div>
                    <div>Hire an Expert</div>
                    <div>Help Center</div>
                </div>
                <div style={column}>
                    <h3>mailchimp presents</h3>
                    <div>Films,podcasts, and original</div>
                    <div>Series that celebrate the</div>
                    <div>enterpreneurial spirit.</div>
                    <div>check it out --</div>
                    <div>
                        <pre>

                        </pre>
                    </div>
                    <h2>Courier</h2>
                    <div>Expert insights, industry</div>
                    <div>trends, and inspiring stories</div>
                    <div>that help you live and work</div>
                    <div>on your own terms</div>
                    <div>Learn more --</div>
                </div>
            </div>
            <hr />
            <div style={least}>
                <div style={list1}>
                    <img style={pic} src="data:image/png;base64,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" />
                    <img style={pic} src="data:image/png;base64,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" />
                </div>
                <div style={list2}>
                    <img style={img} src="https://cdn3.iconfinder.com/data/icons/capsocial-round/500/facebook-512.png"/>
                    <img style={img} src="data:image/png;base64,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" />
                    <img style={img} src="data:image/jpeg;base64,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" />
                    <img style={img} src="data:image/png;base64,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" />
                    <img style={img} src="data:image/jpeg;base64,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" />
                    <img style={img} src="https://i.pinimg.com/280x280_RS/f6/e9/3a/f6e93a06b500b2d87ffd32e1f56f7c6f.jpg" />
                </div>
                <div style={list3}>
                    <select>
                        <option>English</option>
                        <option>Espanol</option>
                        <option>Francias</option>
                        <option>Portugues</option>
                        <option>Deutsch</option>
                        <option>Italian</option>
                    </select>
                    <div>
                    <p>©2001-2022 All Rights Reserved. Mailchimp® is a </p>
                    <p>registered trademark of The Rocket Science Group.</p> 
                    <p>Apple and the Apple logo are trademarks of Apple Inc.</p> 
                    <p>Mac App Store is a service mark of Apple Inc. Google</p> 
                    <p>Play and the Google Play logo are trademarks of Google</p> 
                    <p>Inc. Privacy | Terms | Cookie Preferences</p>
                    </div>
                </div>
            </div>
        </div>
    )
}