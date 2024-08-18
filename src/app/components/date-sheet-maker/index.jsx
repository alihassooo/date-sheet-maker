'use client'
import { v4 as uuidv4 } from 'uuid';
import { useState } from 'react';
import { RiEdit2Fill } from "react-icons/ri";
import { AiTwotoneDelete } from "react-icons/ai";
import styles from '@/app/components/date-sheet-maker/styles.module.css'
export const DateSheet = () => {

    const initialData = {
        subject: '',
        class: '',
        date: '',
        time: '',
    }


    const [formData, setFormData] = useState(initialData)

    const InputChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const header = [
        { id: 'subject', value: 'Subject' },
        { id: 'class', value: 'Class' },
        { id: 'date', value: 'Date' },
        { id: 'time', value: 'Time' },
        { id: 'action', value: 'Action' }
    ]

    const [tableData, setTableData] = useState([])

    const handleSave = () => {
        setTableData([...tableData, formData])
        setFormData(initialData)
    }

    const handleDelete = (index) => {
        setTableData(tableData.filter((_, i) => i !== index));
    };

    return (
        <div className={styles.container}>
            <div className={styles.info}>
                <select className={styles.select}
                    name="subject"
                    value={formData.subject}
                    onChange={InputChange}
                >
                    <option >Select a subject</option>
                    <option >Math</option>
                    <option >English</option>
                    <option >Computer</option>
                    <option>Urdu</option>
                </select>

                <select className={styles.select}
                    name="class"
                    value={formData.class}
                    onChange={InputChange}
                >
                    <option> Select class</option>
                    <option>9th</option>
                    <option> 10th</option>
                </select>

                <input className={styles.select}
                    type="date"
                    name="date"
                    value={formData.date}
                    onChange={InputChange}
                />

                <input className={styles.select}
                    type="text"
                    name="time"
                    value={formData.time}
                    onChange={InputChange}
                />
                <button className={styles.button} onClick={handleSave}>Save</button>
            </div>
            <div >
                <table className={styles.table}>
                    <thead className={styles.thead}>
                        <tr>
                            {header.map((h, index) => (
                                <th key={index}>{h.value}</th>
                            ))}
                        </tr>
                    </thead>

                    <tbody className={styles.tbody}>
                        {tableData.map((row, index) => (
                            <tr key={index}>
                                <td>{row.subject}</td>
                                <td>{row.class}</td>
                                <td>{row.date}</td>
                                <td>{row.time}</td>
                                <td >
                                    <label
                                    ><RiEdit2Fill className={styles.edit} /></label>
                                    <label
                                        onClick={() => handleDelete(index)}
                                    >
                                        <AiTwotoneDelete className={styles.delete} />
                                    </label>
                                </td>
                            </tr>
                        ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
};