// TransactionPopup.tsx
export default function TransactionPopup({ onClose, title, buttonText, topinputLabel }: { onClose: any, title: string, buttonText: string, topinputLabel:string }) {
    return (
        <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center">
            <div className="bg-white border-2 border-black p-4 rounded-lg">
                <h2 className="text-lg font-semibold mb-4">{title} cryptocurrency</h2>

                <div className="mb-4">
                    <label htmlFor="sendTo" className="block text-sm font-medium text-gray-700">
                        {topinputLabel} :
                    </label>
                    <input
                        type="text"
                        id="sendTo"
                        name={topinputLabel}
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder={topinputLabel}
                    />
                </div>

                <div className="mb-4">
                    <label htmlFor="amount" className="block text-sm font-medium text-gray-700">
                        Amount :
                    </label>
                    <input
                        type="number"
                        id="amount"
                        name="amount"
                        className="mt-1 block w-full px-3 py-2 bg-white border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-indigo-500 focus:border-indigo-500"
                        placeholder="Amount in euros"
                    />
                </div>

                <div className="flex justify-end">
                    <button
                        onClick={onClose}
                        className="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l">
                        Cancel
                    </button>
                    <button
                        onClick={() => {/* send logic here */}}
                        className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-r">
                        {buttonText}
                    </button>
                </div>
            </div>
        </div>
    );
}
