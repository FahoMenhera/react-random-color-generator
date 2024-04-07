const Screen = ({ data, setData }) => {
    const symbols = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9', 'A', 'B', 'C', 'D', 'E', 'F'];

    function generateRandomData() {
        let newData = [...data];
        newData = newData.map(() => {
            const r = Math.floor((Math.random() * symbols.length));
            return symbols[r];
        })
        return newData;
    }

    return (
        <>
            <div className="flex flex-col justify-center items-center">
                <div className="text-white font-bold text-8xl">#{data.join('')}</div>
                <button onClick={() => setData(generateRandomData())} className="mt-28 text-white font-bold text-3xl">RANDOMIZEEEEEE</button>
            </div>
        </>
    )
}

export default Screen;
