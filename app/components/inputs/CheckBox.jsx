import { FiCheck } from 'react-icons/fi';

function CheckBox({ name, Boxlable, type, display,value ,onChange}) {
    return (
        <div
            className={`space-x-2 relative flex items-center justify-center ${display === 'col' && 'flex-col pb-6'
                }`}
        >
            <input
                type={type}
                id={name + Boxlable}
                className="peer group hidden appearance-none"
                name={name}
                value={value}
                onChange={(e)=>onChange(e.target.value)}
            />
            <div className="relative top-[1px] bg-white w-5 h-5 rounded-md dark:bg-gray-700 dark:border-gray-500 border peer-hover:hidden peer-checked:hidden " />
            <div className="relative top-[1px] bg-white dark:bg-gray-700 dark:border-gray-500 w-5 h-5 text-xl rounded-md peer-checked:bg-black hidden peer-checked:flex peer-hover:border peer-hover:flex items-center justify-center text-gray-300 peer-checked:text-white ">
                <FiCheck className="" size={'14px'} />
            </div>
            <label
                htmlFor={name + Boxlable}
                className={`cursor-pointer flex gap-1 peer-checked:text-black ${display === 'col' ? 'pt-8 px-2 -top-0 absolute' : 'pl-9 right-9 relative'
                    }`}
            >
                <span className="first-letter:capitalize text-tertiary-base2 leading-[20px]">
                    {Boxlable}
                </span>
            </label>
        </div>
    );
}
export default CheckBox;
