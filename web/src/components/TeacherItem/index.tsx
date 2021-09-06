import React from 'react';

import whatsappIcon from '../../assets/images/icons/whatsapp.svg';

import './styles.css'

function TeacherItem() {
    return (
        <article className="teacher-item">
            <header>

                <img src="https://scontent.fpoa47-1.fna.fbcdn.net/v/t1.6435-1/s200x200/99432045_2983506435069754_579629909886894080_n.jpg?_nc_cat=105&ccb=1-5&_nc_sid=7206a8&_nc_ohc=WRRuWcT5z4QAX9rU4Vj&_nc_ht=scontent.fpoa47-1.fna&oh=f0543d39e81d0cc28856e60531e97dba&oe=6159A6B1" alt="Jader Silva" />

                <div>
                    <strong>Jader Silva</strong>
                    <span>Química</span>
                </div>

            </header>

            <p>
                Entusiasta das melhores tecnologias de química avançada.
                <br /><br />
                Apaixonado por explodir coisas em laboratórios e por mudar a vida das pessoas através de experiencias. Mais de 200.00 pessoas já passaram por uma das minhas explosões.
            </p>

            <footer>
                <p>
                    Preço/hora
                    <strong>R$ 80,00</strong>
                </p>
                <button type="button">
                    <img src={whatsappIcon} alt="Whatsapp" />
                    Entrar em contato
                </button>
            </footer>

        </article>
    )
}

export default TeacherItem;