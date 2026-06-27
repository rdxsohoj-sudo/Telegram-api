async function getData() {
    const query = document.getElementById('query').value;
    const display = document.getElementById('display');
    
    if (!query) {
        display.innerText = "Please enter something to search.";
        return;
    }

    display.innerText = "Searching...";

    try {
        // আপনার দেওয়া API লিংক এখানে কল করা হচ্ছে
        const response = await fetch(`https://tg2num-eight.vercel.app/sms?key=PRIME&term=${encodeURIComponent(query)}`);
        const result = await response.json();

        // শুধুমাত্র আপনার ক্রেডিট দিয়ে রেসপন্স প্রিন্ট করা হচ্ছে
        const finalOutput = {
            "Developer_Credit": "@RDXallhacknew",
            "Status": "100% Success",
            "Data_Found": result
        };

        display.innerText = JSON.stringify(finalOutput, null, 4);
        
    } catch (error) {
        display.innerText = "Error: API call failed. Please check your connection.";
    }
}
