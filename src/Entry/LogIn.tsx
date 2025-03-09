import { ArrowRightIcon } from "@heroicons/react/24/solid";
import { FcGoogle } from "react-icons/fc";
import { FaApple } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

export default function LogIn() {

    const nav = useNavigate();

  return (
    <>
      <div className="w-screen h-screen flex items-center justify-center overflow-hidden bg-stone-950">
        <div className="gap-4 comfortaa w-1/3 h-9/12 border-3 border-stone-100 bg-stone-950 flex flex-col items-center justify-between p-8">
          <div className="z-10">
            <div className="inline bg-blue-500 text-stone-100 text-3xl py-3 px-10">Log in</div>
          </div>

          <div className="flex flex-col w-full h-full gap-4 items-center justify-center">
            <input type="text" className="w-full bg-stone-100 h-16 px-4 text-center" placeholder="Write email or login..." />
            <input type="password" className="w-full bg-stone-100 h-16 px-4 text-center" placeholder="Write your password..."/>
          
          </div>

          <div className="w-full flex flex-col items-center space-y-4">
      {/* Вход через Google */}
      <button className="w-full max-w-xs flex items-center justify-center gap-3 text-black bg-white border border-gray-300 py-2 px-4 rounded-lg shadow-md hover:bg-gray-100 transition">
        <FcGoogle className="text-2xl" />
        <span className="">Войти через Google</span>
      </button>

      {/* Вход через Apple */}
      <button className="w-full max-w-xs flex items-center justify-center gap-3 text-white bg-black py-2 px-4 rounded-lg shadow-md hover:bg-stone-950 transition">
        <FaApple className="text-2xl" />
        <span className="">Войти через Apple</span>
      </button>

      {/* Альтернативный вход */}
      <div className="flex items-center w-full max-w-xs">
        <div className="flex-1 border-t border-gray-400"></div>
        <span className="px-2 text-gray-500">или</span>
        <div className="flex-1 border-t border-gray-400"></div>
      </div>

      {/* Кнопка обычного входа */}
      <button
      onClick={() => nav('/')} 
      className="w-full max-w-xs flex items-center justify-center gap-3 text-white bg-blue-600 py-2 px-4 rounded-lg shadow-md hover:bg-blue-700 transition">
        <span className="">Войти с паролем</span>
        <ArrowRightIcon className="w-5 h-5" />
      </button>
    </div>

        </div>
      </div>
    </>
  );
}
