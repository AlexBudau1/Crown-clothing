import { useState} from "react";
import { signInWithGooglePopup, createUserDocumentFromAuth, signInAuthUserWithEmailAndPassword} from "../../utils/firebase/firebase.utils";
import FormInput from "../form-input/form-input.component";
import './sign-in-form.styles.scss';
import Button, {button_type_classes} from "../button/button.component";

const defaultFormField = {
    email: '',
    password: '',
}

const SignInForm = () => {

    const [formFields, setFormFields] = useState(defaultFormField);
    const { email, password } = formFields;

    const resetFormFields = () => {
        setFormFields(defaultFormField)
    }

    const signInWithGoogle = async()=>{
        await signInWithGooglePopup();
        
    }


    const handleSubmit = async (event) => {
        event.preventDefault();

        try{
            const {user} = await signInAuthUserWithEmailAndPassword(email,password);
            resetFormFields();
        }catch(error){
            switch(error.code){
                case 'auth/wrong-password': 
                    alert ('Incorrect password for email!');
                    break;
                case 'auth/user-not-found':
                    alert('No user associated with this email!')
                    break;
                default:
                    console.log(error)
            }
        }
    }

    const handleChange = (event) =>{
        const {name, value} = event.target;

        setFormFields({
            ...formFields, [name]:value
        })
    }

    return(
        <div className="sign-up-container">
            <h2>Already have an account?</h2>
            <span>Sign up with your email and password</span>
            <form onSubmit={handleSubmit}>
                
                <FormInput label="Email" type='email' required onChange={handleChange} name='email' value={email}/>

                <FormInput label="Password" type='password' required onChange={handleChange} name='password' value={password}/>
                
                <div className="buttons-container">
                    <Button children="SIGN IN" buttonType={button_type_classes.inverted} type="submit" />
                    <Button type="button" children="GOOGLE SIGN IN" buttonType={button_type_classes.google} onClick={signInWithGoogle} />
                </div>
            </form>
        </div>
    )
}

export default SignInForm;