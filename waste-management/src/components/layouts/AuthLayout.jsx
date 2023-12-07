import { ErrorBoundary } from 'react-error-boundary';
import { Link, useLocation } from 'react-router-dom';
import { ErrorUI } from '../error/ErrorUi';
import truck from '../../assets/videos/truck.gif'
// import { ReactComponent as ArrowNarrowLeft } from '../../assets/svg/arrow_narrow_left.svg';


const AuthLayout = ({ children }) => {
  const location = useLocation();
  const linkTo = location.pathname === '/signup' ? '/signin' : '/signup';

  const header = () => {
    if (location.pathname === '/signup') {
      return "Let's Get Started";
    } else if (location.pathname === '/completeprofile') {
      return 'Complete Profile';
    } else if (location.pathname === '/signin') {
      return 'Welcome Back!';
    } else if (location.pathname === '/forgotpassword') {
      return 'Forgot Password?';
    } else if (location.pathname === '/passwordreset') {
      return 'Create New Password.';
    }
  };

  const subHeader = () => {
    if (location.pathname === '/signup') {
      return 'To sign up admin must fill in basic information below';
    } else if (location.pathname === '/completeprofile') {
      return 'Complete profile information to go on to assessment';
    } else if (location.pathname === '/signin') {
      return 'Please enter your information to access your Account.';
    } else if (location.pathname === '/forgotpassword') {
      return 'Please provide your email address to initiate the password reset process.';
    } else if (location.pathname === '/passwordreset') {
      return `To ensure unauthorised access is prevented, kindly reset 
      your password using strong characters.`;
    }
  };

  return (
    <div className="bg-authImage bg-contain bg-left bg-no-repeat w-screen flex items-center gap-32 bg-white md:p-5 lg:p-0">
      <ErrorBoundary FallbackComponent={ErrorUI}>
        <div className="flex align-middle border justify-center h-screen w-2/5  sm:w-2/5  hidden lg:block">
          <img  src={truck} alt="truck" />
        </div>

        <div className="sm:w-2/5 w-full flex-col items-end sm:p-2 p-4">
          <Link to={location.pathname.includes('forgotpassword') ? '/signin' : '/'}>
            <span className="text-black font-medium text-small flex gap-2 items-center">
              --- {location.pathname.includes('forgotpassword') ? 'Go back to login' : 'Go Home'}
            </span>
          </Link>
          <h1 className="my-2 lg:text-xl-heading text-green-500 font-semibold md:text-xl"> {header()}</h1>
          <p className="mb-2 text-gray-900 md:text-sm"> {subHeader()}</p>
          <div>
            {children}
            {(location.pathname === '/signup' || location.pathname === '/signin') && (
              <p className=" text-black text-sm font-medium">
                Have an account?{' '}
                <Link to={linkTo} className="text-green-500">
                  {location.pathname === '/signup' ? 'Sign In' : 'Sign Up'}
                </Link>
              </p>
            )}
          </div>
        </div>
      </ErrorBoundary>
    </div>
  );
};

export default AuthLayout;
