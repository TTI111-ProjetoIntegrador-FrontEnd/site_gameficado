const questions = [
  {
    pergunta: "Qual é o resultado de 235 + 487?",
    resposta: "722",
    nivel: "fácil"
  },
  {
    pergunta: "Se você tem 150 maçãs e compra mais 75, quantas maçãs você tem agora?",
    resposta: "225",
    nivel: "fácil"
  },
  {
    pergunta: "Quanto é 800 - 456?",
    resposta: "344",
    nivel: "fácil"
  },
  {
    pergunta: "Se você tinha 200 reais e gastou 75, quanto dinheiro resta?",
    resposta: "125",
    nivel: "fácil"
  },
  {
    pergunta: "Qual é o produto de 12 e 15?",
    resposta: "180",
    nivel: "fácil"
  },
  {
    pergunta: "Se uma caixa contém 8 chocolates e você compra 5 caixas, quantos chocolates você tem?",
    resposta: "40",
    nivel: "fácil"
  },
  {
    pergunta: "Quanto é 144 dividido por 12?",
    resposta: "12",
    nivel: "fácil"
  },
  {
    pergunta: "Se você tem 50 balas e quer dividir igualmente entre 5 amigos, quantas balas cada amigo receberá?",
    resposta: "10",
    nivel: "fácil"
  },
  {
    pergunta: "Se 3 kg de arroz custam 18 reais, quanto custam 5 kg?",
    resposta: "30",
    nivel: "médio"
  },
  {
    pergunta: "Se um carro percorre 240 km com 20 litros de gasolina, quantos litros são necessários para percorrer 360 km?",
    resposta: "30",
    nivel: "médio"
  },
  {
    pergunta: "Maria tem 120 figurinhas e dá 45 para seu amigo. Quantas figurinhas ela ainda tem?",
    resposta: "75",
    nivel: "fácil"
  },
  {
    pergunta: "João comprou 3 camisetas por 30 reais cada. Se ele paga com uma nota de 100 reais, quanto dinheiro ele receberá de troco?",
    resposta: "10",
    nivel: "fácil"
  },
  {
    pergunta: "Se 4 maçãs custam 10 reais, quanto custam 10 maçãs?",
    resposta: "25",
    nivel: "fácil"
  },
  {
    pergunta: "Um atleta corre 5 km em 25 minutos. Quanto tempo ele levará para correr 15 km na mesma velocidade?",
    resposta: "75 minutos",
    nivel: "médio"
  },
  {
    pergunta: "Se um produto custa 200 reais e está com 20% de desconto, qual é o preço com desconto?",
    resposta: "160",
    nivel: "fácil"
  }
];

let currentQuestion = 0;
let score = 0;

function loadQuestion() {
    document.getElementById('quiz-container').style.display = 'block';
    document.getElementById('result-container').style.display = 'none';

    const questionElement = document.getElementById('question');
    const options = document.getElementsByClassName('option');
    
    questionElement.textContent = questions[currentQuestion].question;
    for (let i = 0; i < options.length; i++) {
        options[i].textContent = questions[currentQuestion].options[i];
    }
    
    // document.getElementById('score').textContent = `Pontuação: ${score}`;
    document.getElementById('next-btn').style.display = 'none';
}

function checkAnswer(selectedOption) {
    const correctAnswer = questions[currentQuestion].answer;
    if (selectedOption === correctAnswer) {
        alert('Correto!');
        score++;
    } else {
        alert('Errado!');
    }
    document.getElementById('next-btn').style.display = 'block';
}

function nextQuestion() {
    currentQuestion++;
    if (currentQuestion < questions.length) {
        loadQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('quiz-container').style.display = 'none';
    document.getElementById('result-container').style.display = 'block';
    document.getElementById('final-score').textContent = `Sua pontuação final é: ${score} de ${questions.length}`;
}

function restartQuiz() {
    currentQuestion = 0;
    score = 0;
    loadQuestion();
}

// Carrega a primeira questão ao abrir a página
window.onload = loadQuestion;
