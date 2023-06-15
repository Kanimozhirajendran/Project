import './App.css';

function App() {

  // async function submit(){
  //   console.warn(name,email,phoneNo,description,checkbox)
  //   let item = { name,email,phoneNo,description,checkbox }
  //   let result = await fetch("http://formz.in/api/task" ,{
  //     method: "POST",
  //   })
  // }
  return (
    <div className="Header">
      <h1>Let's level up your brand,together</h1>
      <h6>You can reach us anytime via hi@untitledui.com</h6>
      <b>
      <label for="name">Name</label><br/>
      <input id="name" type="text" placeholder="Your name" required></input><br/><br/>
      <label for="email">Email</label><br/>
      <input id="email" type="text" placeholder="you@company.com" required></input><br/><br/>
      <label for="phoneNo">Phone number</label><br/>
      <input id="phoneNo" type="text" placeholder="+1 (555) 000-0000" required></input><br/><br/>
      <label for="description">How can we help?</label><br/>
      <input id="description" type="text" placeholder="Tell us a little about the project..." size="50" required></input><br/><br/>
      <label for="checkbox">Services</label><br/></b>
      <input type="checkbox" id="websiteDesign" name="Website Design" value="Website"></input>
      <label for="websiteDesign">Website Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="checkbox" id="contentCreation" name="Content Creation" value="Content"></input>
      <label for="contentCreation">Content Creation</label><br/>
      <input type="checkbox" id="uxDesign" name="UX Design" value="UX"></input>
      <label for="uxDesign">UX Design &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="checkbox" id="strategy&Consulting" name="strategy&Consulting" value="s&c"></input>
      <label for="strategy&Consulting">Strategy & Consulting</label><br/>
      <input type="checkbox" id="userResearch" name="User Research" value="UserResearch"></input>
      <label for="userResearch">User Research &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</label>
      <input type="checkbox" id="other" name="other" value="other"></input>
      <label for="other">Other</label>
      <br/>

      <button class="button"> Send Message </button>
    </div>
  );
}

export default App;
