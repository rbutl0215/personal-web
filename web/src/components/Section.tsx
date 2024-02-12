import { ReactNode } from "react";

export interface SectionProps {
    children: ReactNode;
    title: string
}

const Section: React.FC<SectionProps> = ({ children, title }) => {
    return (
        <div>
            <span className="text-2xl">{title}</span>
            <hr className="mb-10"/>
            {children}
        </div>
    )
}

export default Section;
