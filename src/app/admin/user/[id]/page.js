import CancelButton from "../CancelButton";
import { createUser, showUser, updateUser } from "../servis";

export default async function UserTambahPage({params}) {
    const{id}=await params

    const data=await showUser(id)
  return (
    <form action={updateUser} className="px-50 mt-5 my-10">
        <input value={data.id} type="hidden" name="id"/>
      <div className="space-y-12 px-20 pt-10 bg-white rounded-2xl">
        <div className="border-b border-gray-900/10 pb-12">
          <h2 className="text-base/7 font-semibold text-gray-900">
            Personal Information
          </h2>
          <p className="mt-1 text-sm/6 text-gray-600">
            Use a permanent address where you can receive mail.
          </p>

          <div className="col-span-full">
            <label
              htmlFor="nama"
              className="block text-sm/6 font-medium text-gray-900"
            >
              nama
            </label>
            <div className="mt-2">
              <input
               name="nama"
                id="nama"
                type="text"
                autoComplete="nama"
                defaultValue={data.nama}
                
                className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
              />
            </div>
          </div>

          <div className="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
            <div className="sm:col-span-3">
              <label
                htmlFor="email"
                className="block text-sm/6 font-medium text-gray-900"
              >
                email
              </label>
              <div className="mt-2">
                <input
                  name="email"
                  id="email"
                  type="text"
                  autoComplete="given-name"
                  defaultValue={data.email}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>

            <div className="sm:col-span-3">
              <label
                htmlFor="password"
                className="block text-sm/6 font-medium text-gray-900"
              >
                password
              </label>
              <div className="mt-2">
                <input
                  name="password"
                  id="password"
                  type="text"
                  autoComplete="family-name"
                  defaultValue={data.password}
                  className="block w-full rounded-md bg-white px-3 py-1.5 text-base text-gray-900 outline-1 -outline-offset-1 outline-gray-300 placeholder:text-gray-400 focus:outline-2 focus:-outline-offset-2 focus:outline-indigo-600 sm:text-sm/6"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="border-b border-gray-900/10 pb-12">
          <div className="mt-10 space-y-10">
            <fieldset>
              <legend className="text-sm/6 font-semibold text-gray-900">
                role
              </legend>

              <div className="mt-6 space-y-6">
                <div className="flex items-center gap-x-3">
                  <input
                    name="role"
                    defaultChecked={data?.role === "admin"}
                    id="role-admin"
                    value="admin"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    htmlFor="role-admin"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    Admin
                  </label>
                </div>
                <div className="flex items-center gap-x-3">
                  <input
                    name="role"
                    defaultChecked={data?.role === "user"}
                    id="role-user"
                    value="user"
                    type="radio"
                    className="relative size-4 appearance-none rounded-full border border-gray-300 bg-white before:absolute before:inset-1 before:rounded-full before:bg-white not-checked:before:hidden checked:border-indigo-600 checked:bg-indigo-600 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600 disabled:border-gray-300 disabled:bg-gray-100 disabled:before:bg-gray-400 forced-colors:appearance-auto forced-colors:before:hidden"
                  />
                  <label
                    htmlFor="role-user"
                    className="block text-sm/6 font-medium text-gray-900"
                  >
                    user
                  </label>
                </div>
              </div>
            </fieldset>
            <div className="flex justify-end gap-4">
              <CancelButton/>
              <button
                type="submit"
                className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-xs hover:bg-indigo-500 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Save
              </button>
            </div>
          </div>
        </div>
      </div>
    </form>
  );
}
