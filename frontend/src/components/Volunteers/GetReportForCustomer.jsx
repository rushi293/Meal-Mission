import axios from 'axios';
import React, { useEffect, useRef } from 'react';
import ConString from "./../../ConnectionString";
import { useState } from 'react';
import jsPDF from 'jspdf';
import Chart from 'chart.js/auto';
import html2pdf from 'html2pdf.js';
import {toast} from 'react-toastify'

const VolunteerReport = () => {
    const [drives, setdrives] = useState(0);

    const myChartRef = useRef(null);
    let mydata = [];

    const download = () => {
        if (myChartRef.current) {
            // Convert to base 64 image
            const pdf = new jsPDF('p', 'mm', 'a4');
            
            // Convert the content of the container to a PDF
            html2pdf(document.getElementById('pdfData'), {
                margin: 10,
                filename: 'report.pdf',
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 1 },
                jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
            });
            toast.success("Pdf has been downloaded successfully");
        }
    };

    const getMonth = (stamp) => {
        const date = new Date(stamp);
        const ch=date.getMonth();
        switch (ch) {
            case 1:
                return "Jan"
            case 2:
                return "Feb"
            case 3:
                return "Mar"
            case 4:
                return "Apr"
            case 5:
                return "May"
            case 6:
                return "Jun"
            case 7:
                return "Jul"
            case 8:
                return "Aug"
            case 9:
                return "Sep"
            case 10:
                return "Oct"
            case 11:
                return "Nov"
            case 12:
                return "Dec"
            default:
                return "month"
        }
    };

    useEffect(() => {

        axios.get(ConString+`user/getStats/${sessionStorage.getItem('id')}`).then(res=>{
            console.log(res);
        }).catch(err=>{
            console.log(err);
        })
        mydata.forEach((item) => (item.date = getMonth(item.date)));

        if (myChartRef.current) {
            myChartRef.current.destroy();
        }

        myChartRef.current = new Chart(document.getElementById('myGraph').getContext('2d'), {
            data: {
                datasets: [
                    {
                        type: 'bar',
                        label: 'Drives',
                        data: mydata.map((ele) => ele.drives),
                    },
                    
                ],
                labels: mydata.map((ele) => ele.date),
            },
            options: {

            },
        });

        mydata.forEach((ele) => setdrives((drives) => drives + ele.drives));
        

    }, []);
    console.log(drives);
    return sessionStorage.getItem('id')?(<div className="w-full h-full flex justify-center">
            <div className="m-10 p-4 w-4/5">
                <div id="pdfData">
                    <h3 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900 my-4 text-center">
                        Statistics of your monthly contribution
                    </h3>
                    <canvas id="myGraph"></canvas>
                    <div id='smtg' className="flex justify-center ">
                        <div className="  mt-8 sm:mt-12 w-4/5">
                            <dl className="grid grid-cols-1 gap-4 sm:grid-cols-2">

                                <div className="flex flex-col rounded-lg bg-purple-50 px-4 py-8 text-center">
                                    <dt className="order-last text-lg font-medium text-gray-500">Drives</dt>

                                    <dd className="text-4xl font-extrabold text-purple-600 md:text-5xl">{drives}</dd>
                                </div>

                            </dl>
                        </div>

                    </div>
                </div>
                <button
                    type="button"
                    onClick={download}
                    className="px-5 py-2.5 text-sm font-medium text-white inline-flex items-center bg-purple-500 hover:bg-purple-600 focus:outline-none focus:ring-purple-300 rounded-lg text-center">
                    Download
                </button>
            </div>
        </div>
    ):toast.error("You are not logged in");
};


export default VolunteerReport
