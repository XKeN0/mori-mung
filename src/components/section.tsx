import {
    useEffect,
    useRef,
    useState,
    type ReactNode,
} from "react";

interface SectionProps {
    children: ReactNode;
    id?: string;
}

function Section({ children, id }: SectionProps) {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const section = sectionRef.current;

        if (!section) return;

        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            {
                threshold: 0.25,
            }
        );

        observer.observe(section);

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            id={id}
            className={`page-section ${
                isVisible ? "section-visible" : ""
            }`}
        >
            {children}
        </section>
    );
}

export default Section;