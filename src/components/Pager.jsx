import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Pager = ({ selectedItem, setNextItem }) => {
    const components = ["Processor", "GPU", "RAM", "SSD", "Case", "PSU"];
    const urls = ["/processors", "/gpu", "/memory", "/storage", "/cases", "/psu"];
    const navigate = useNavigate(); // Hook for navigation

    const [next, setNext] = useState("");
    const [prev, setPrev] = useState("");

    const [previousKeys, setPreviousKeys] = useState(Object.keys(selectedItem));

    const updateNavigation = () => {
        const selectedKeys = Object.keys(selectedItem);
        const lastSelectedKey = selectedKeys[selectedKeys.length - 1];

        setNext("");
        setPrev("");

        switch (lastSelectedKey) {
            case "Processor":
                setNext(selectedKeys.includes("GPU") ? "/gpu" : "/gpu");
                setPrev(selectedKeys.includes("PSU") ? "/psu" : "/psu");
                break;
            case "GPU":
                setNext(selectedKeys.includes("RAM") ? "/memory" : "/memory");
                setPrev(selectedKeys.includes("Processor") ? "/processors" : "/processors");
                break;
            case "RAM":
                setNext(selectedKeys.includes("SSD") ? "/storage" : "/storage");
                setPrev(selectedKeys.includes("GPU") ? "/gpu" : "/gpu");
                break;
            case "SSD":
                setNext(selectedKeys.includes("Case") ? "/cases" : "/cases");
                setPrev(selectedKeys.includes("RAM") ? "/memory" : "/memory");
                break;
            case "Case":
                setNext(selectedKeys.includes("PSU") ? "/psu" : "/psu");
                setPrev(selectedKeys.includes("SSD") ? "/storage" : "/storage");
                break;
            case "PSU":
                setNext(selectedKeys.includes("Processor") ? "/processors" : "/processors");
                setPrev(selectedKeys.includes("Case") ? "/cases" : "/cases");
                break;
            default:
                setNext("");
                break;
        }

        // Check for missing components
        for (let component of components) {
            if (!selectedKeys.includes(component)) {
                setNextItem(component);
                break;
            }
        }
    };

    useEffect(() => {
        const selectedKeys = Object.keys(selectedItem);

        // Check for removed components
        const removedComponent = previousKeys.find(key => !selectedKeys.includes(key));
        if (removedComponent) {
            const missingComponent = components.find(component => !selectedKeys.includes(component));
            if (missingComponent) {
                navigate(urls[components.indexOf(missingComponent)]); // Redirect to the missing component's page
            }
        }

        updateNavigation();
        setPreviousKeys(selectedKeys);
    }, [selectedItem]);

    // Handling the Enter key for navigation
    const handleKeyDown = (event) => {
        if (event.key === 'Enter') {
            if (next) {
                navigate(next); // Navigate to the next page if next is available
            }
        }
    };

    // Add event listener for keydown
    useEffect(() => {
        window.addEventListener('keydown', handleKeyDown);

        // Cleanup event listener on unmount
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [next]); // Re-run the effect if 'next' changes

    return (
        <div className="">
            <Link
                className="btn btn-success mx-2"
                to={prev || "#"}
                disabled={!prev}
            >
                ◄ Prev
            </Link>

            <Link
                className="btn btn-success mx-2"
                to={next || "#"}
                disabled={!next}
            >
                Next ►
            </Link>
            <br />
            <div className="fw-light text-muted">Press <span className="fw-bold">Enter</span> to go to next page</div>
        </div>
    );
}

export default Pager;
