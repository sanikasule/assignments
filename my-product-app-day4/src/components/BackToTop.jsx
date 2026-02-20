import { useScrollPosition } from "../hooks/useScrollPosition";

function BackToTop() {
    const scrollPosition = useScrollPosition();

    //to scroll up after button clicking
    //onCLick write function that would happen after clicking button
    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    }

    if(scrollPosition > 300) {
        return (
            <button onClick={scrollToTop} style={{ padding: '10px 20px', background: '#0066cc', color: 'white', border: 'none',      borderRadius: '4px', cursor: 'pointer', fontSize: '16px', fontWeight: 'bold', position: 'relative', display: 'flex', alignItems: 'center', gap: '8px', position: 'fixed', bottom: '20px', right: '20px', zIndex: '1000' }} > 
            {/* zIndex to make sure button is above all the elements */}
                Back to Top
            </button>
        )
    }
    return null;
}

export default BackToTop;