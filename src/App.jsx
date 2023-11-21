// import './App.css'
import "./assets/components/CM,style.css"
import FormPropsTextFields from './assets/components/CM,text_input.jsx'
import FormPropsEmailFields from './assets/components/CM,email_input.jsx'
import InputAdornments from './assets/components/CM,password_input.jsx'
import FormPropsText2Fields from './assets/components/CM,text2_input.jsx'
import MultipleSelect from './assets/components/CM,select_box.jsx'

function App() {

  return (
    <>
      <p className='line_1'>Try <span className='bold'>Sign</span> free for 14 days</p>
      <p className='line_2'>Already have a Formstack account? <a href="#">Start your trial in app <span className='logo'><i class="fa-thin fa-greater-than"></i></span></a></p>

      <div className='main_div'>

        <div className='inline_block'>
          <label htmlFor="input_01">FIRST NAME</label>
          <br /><br />
          < FormPropsTextFields id="input_01" input_label="First Name" placeholder="ahsan" input_width />
        </div>

        <div className='inline_block' style={{ marginLeft: '30px' }}>
          <label htmlFor="input_02">LAST NAME</label>
          <br /><br />
          < FormPropsTextFields id="input_02" input_label="Last Name" placeholder="manzar" input_width />
        </div>

        <br /> <br />

        <label htmlFor="email-input">WORK EMAIL</label>
        <br /><br />
        < FormPropsEmailFields id="email-input" email_width />

        <br /> <br />
        <label htmlFor="password-input">PASSWORD</label>
        <br /><br />
        < InputAdornments id="password-input" password_width />

        <br />
        <label htmlFor="input_03">ORGANIZATION NAME</label>
        <br /><br />
        < FormPropsText2Fields id="input_03" input_label="Organization Name" placeholder="xyz organization" input2_width />

        <br /><br />
        <label htmlFor="">ORGANIZATION SIZE</label>
        <br /><br />
        < MultipleSelect />

        <br />
        <label htmlFor="">INDUSTRY</label>
        <br /><br />
        < MultipleSelect />

        <br />

        <p><input class="form-check-input" type="checkbox" value="" id="flexCheckDefault" /> Formstack has updated our Terms of Service effective January 4, 2023. <br /> We encourage you to read the document in its entirety.</p>

        <p>I understand and agree to the <a href="#">Formstack Privacy Policy</a>, <a href="#">Software Services Agreement</a> and <a href="#">Acceptable Use Policy</a></p>

        <div class="d-grid gap-2">
          <button class="btn btn-primary" type="button">Button</button>
        </div> 
      </div >


    </>
  )
}

export default App
