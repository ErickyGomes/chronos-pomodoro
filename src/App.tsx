import './styles/theme.css';
import './styles/global.css';

import { Container } from './components/Container';

export function App() {
    return (
        <>
        <Container>
            <section>
                <h1>Método Pomodoro</h1>
                <p>
                O método Pomodoro é uma técnica de gestão de tempo criada por Francesco Cirillo 
                no final dos anos 1980. O nome vem do temporizador de cozinha em formato de tomate 
                (“pomodoro” em italiano) que ele usava para aplicar o método.
                </p>
                <h2>Como funciona?</h2>
                <ul>
                    <li>Escolha a tarefa que deseja realizar.</li>
                    <li>Defina um tempo para a tarefa (geralmente 25 minutos).</li>
                    <li>Trabalhe na tarefa por 25 minutos.</li>
                    <li>Tome um descanso de 5 minutos.</li>
                    <li>Repita o processo 4 vezes.</li>
                    <li>Tome um descanso longo de 15 a 30 minutos.</li>
                    <li>Repita o processo.</li>
                </ul>
                <h2>Benefícios</h2>
                <ul>
                    <li>Aumenta a produtividade.</li>
                    <li>Reduz o estresse.</li>
                    <li>Melhora a qualidade do sono.</li>
                </ul>
                <h3>Objetivo</h3>
                <p>
                    O método busca melhorar a concentração e reduzir a procrastinação, 
                    quebrando o trabalho em blocos de tempo focados com pequenas pausas para descanso. 
                    Isso ajuda a manter a mente fresca e produtiva.
                </p>
            </section>
        </Container>
        </>
    );
}