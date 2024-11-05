
const CampoInfos = ({ label, value }) => {
    return (
        <div className={`flex bg-claro-1 shadow-sombra2 rounded-[1.2dvw] w-[25dvw] items-center justify-between h-[3dvw] px-[1dvw] gap-[2dvh] dark:bg-escuro-2 dark:text-claro-2`}>
            <p className=''>{label}</p>
            <p className=''>{value}</p>
        </div>
    );
}

export default CampoInfos;
