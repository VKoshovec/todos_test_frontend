export default function Home() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex min-h-screen w-full max-w-3xl flex-col items-center justify-between py-32 px-16 bg-white dark:bg-black sm:items-start">
        <p>
          <strong>Mockups</strong>
        </p>
        <hr className="w-9/12 border-b-gray-900"></hr>

        <form className="flex flex-row w-9/12  border-b-gray-900 p-2">
          <input placeholder="Border name..." className=" w-2/3  border-b-gray-900 p-2"/>
          <button className=" w-1/3">Load</button>
        </form>
        <table className="w-9/12 border-b-gray-900">
          <thead className="w-9/12 border-b-gray-900 bg-gray-200">
            <tr>
              <th>
                <div>To Do</div>
              </th>
              <th>
                <div>In Progress</div>
              </th>
              <th>
                <div>Done</div>
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>
                <div>
                  <div><strong>Title</strong></div>
                  <div>Deskription</div>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </main>
    </div>
  );
}
