import React from 'react';
import Input from '../../components/Input';

import PageHeader from '../../components/PageHeader';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

import warningIcon from '../../assets/images/icons/warning.svg'

import './styles.css';


function TeacherForm() {
    const scheduleItems = [
        { weekday: 0, from: '8:00 AM', to: '4:00 PM' },
        { weekday: 2, from: '10:00 AM', to: '6:00 PM' },
    ]

    return (
        <div id="page-teacher-form" className="container">
            <PageHeader
                title="Que incrível que você quer dar aulas."
                description="O primeiro passo é preencher este formulário de inscrição"
            />

            <main>
                <fieldset>
                    <legend>
                        Seus dados
                    </legend>

                    <Input name="name" label="Nome completo" />

                    <Input name="avatar" label="Avatar" />

                    <Input name="whatsapp" label="Whatsapp" />

                    <Textarea name="bio" label="Biografia" />

                </fieldset>

                <fieldset>
                    <legend>
                        Sobre a aula
                    </legend>

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

                    <Input name="cost" label="Custo da sua hora por aula" />

                </fieldset>

                <fieldset>
                    <legend>
                        Horários disponíveis
                        <button type="button">
                            + Novo horário
                        </button>
                    </legend>

                    {scheduleItems.map(scheduleItem => {
                        return (
                            <div className="schedule-item">
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

                                <Input name="from" type="time" label='Das' />
                                <Input name="to" type="time" label='Até' />

                            </div>
                        );
                    })}

                </fieldset>

                <footer>
                    <p>
                        <img src={warningIcon} alt="Aviso importante" />
                        Importante! <br />
                        Preencha todos os dados
                    </p>
                    <button type="button">
                        Salvar cadastro
                    </button>
                </footer>

            </main>
        </div>
    )
}

export default TeacherForm;