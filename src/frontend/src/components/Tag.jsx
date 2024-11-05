import { X } from "lucide-react";

const Tag = ({ tagName, onRemove }) => {
    return (
        <div className={`flex items-center justify-evenly bg-[#CBDCF9] text-azul-2 px-[0.5dvw] gap-[0.5dvw]`}>
            <p className="text-[0.8dvw]">{tagName}</p>
            <button onClick={onRemove} className="flex text-azul-2 text-[1dvw] h-[1dvw] w-[1dvw] items-center justify-center bg-[#CBDCF9] hover:text-white rounded-lg">
                <X className="w-[0.8dvw] h-[0.8dvw]"/>
            </button>
        </div>
    );
}

export default Tag;
