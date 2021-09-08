import React from 'react';

import Input from '../../components/Input';
import PageHeader from '../../components/PageHeader';
import Select from '../../components/Select';
import TeacherItem from '../../components/TeacherItem';

import './styles.css'

function TeacherList() {
    return (
        <div id="page-teacher-list" className="container">
            <PageHeader title="Estes são os proffys disponíveis.">
                <form id="search-teachers">

                    {/*Escolher materia*/}
                    <Select
                        name="subject"
                        label="Matéria" 
                        options={[
                            { value: "Artes", label: "Artes" },
                            { value: "Biologia", label: "Biologia" },
                            { value: "Ciências", label: "Ciências" },
                            { value: "Educação fisíca", label: "Educação fisíca" },
                            { value: "Fisíca", label: "Fisíca" },
                            { value: "Geografia", label: "Geografia" },
                            { value: "História", label: "História" },
                            { value: "Matemática", label: "Matemática" },
                            { value: "Português", label: "Português" },
                            { value: "Quimíca", label: "Quimíca" },
                            { value: "Inglês", label: "Inglês" },
                            { value: "Espanhol", label: "Espanhol" },
                            { value: "Literatura", label: "Literatura" },
                            { value: "Sociologia", label: "Sociologia" },
                            { value: "Filosofia", label: "Filosofia" },
                        ]}
                        />

                    {/*Escolher dia da semana*/}
                    <Select
                        name="week_day"
                        label="Dia da Semana" 
                        options={[
                            { value: "1", label: "Segunda-feira" },
                            { value: "2", label: "Terça-feira" },
                            { value: "3", label: "Quarta-feira" },
                            { value: "4", label: "Quinta-feira" },
                            { value: "5", label: "Sexta-feira" },
                            { value: "6", label: "Sabado-feira" },
                            { value: "0", label: "Domingo-feira" },
                        ]}
                        />

                    {/*Escolher horario*/}
                    <Input type="time" name="time" label="Hora"/>

                </form>
            </PageHeader>

            <main>
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
                <TeacherItem />
            </main>

        </div>
    )
}

export default TeacherList;