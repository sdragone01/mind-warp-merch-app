import fire from '../../config/Fire';





export default function Home() {
    const currentUser = fire.auth().currentUser;
    const logOut = () => {
        fire.auth().signOut();
    }

    return (
        <div>
            <h1>Hello {currentUser.displayName}</h1>
            <button onClick={logOut}>Log Out</button>
        </div>
    );
}