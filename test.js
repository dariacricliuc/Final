document.addEventListener('DOMContentLoaded', function() {
    const quizForm = document.getElementById('quizForm');
    const resultsSection = document.getElementById('resultsSection');
    const testSection = document.querySelector('.test-section');
    const retryButton = document.getElementById('retryButton');
    
    const correctAnswers = {
        q1: 'a',
        q2: 'a',
        q3: 'b',
        q4: 'b',
        q5: 'b',
        q6: 'c',
        q7: 'b',
        q8: 'b',
        q9: 'a',
        q10: 'b',
        q11: 'b',
        q12: 'b',
        q13: 'a',
        q14: 'a',
        q15: 'c'
    };
    
    const questionTexts = {
        q1: '1. Какой стиль создал Такаси Мураками?',
        q2: '2. Что означает "нихонга"?',
        q3: '3. Какой философский принцип ценит "следы времени и несовершенство"?',
        q4: '4. В каком десятилетии японское искусство совершило прорыв на мировой арене?',
        q5: '5. Какой музей НЕ упомянут как проводящий выставки японских художников?',
        q6: '6. Что исследуют современные японские художники через свою философию?',
        q7: '7. Какой город считается арт-хабом Азии наравне с Токио?',
        q8: '8. Что означает "моно-но аварэ"?',
        q9: '9. Какая работа принадлежит Икенага Ясунари?',
        q10: '10. Кто создал "Тан Тан Бо"?',
        q11: '11. Какой материал использует Чихару Шиота для инсталляций?',
        q12: '12. Какой художник известен как "Королева точек"?',
        q13: '13. Кто использует найденные объекты для инсталляций о миграции?',
        q14: '14. Какой художник создает психоделические пейзажи в технике нихонга?',
        q15: '15. Какая работа Яёи Кусамы является знаменитой инсталляцией?'
    };
    
    const answerOptions = {
        q1: { a: 'Суперфлэт', b: 'Суперреализм', c: 'Цифровой импрессионизм' },
        q2: { a: 'Традиционная японская живопись', b: 'Современная цифровая графика', c: 'Искусство оригами' },
        q3: { a: 'Дзен-буддизм', b: 'Ваби-саби', c: 'Моно-но аварэ' },
        q4: { a: '1970-е', b: '1990-е', c: '2010-е' },
        q5: { a: 'MoMA, Нью-Йорк', b: 'Лувр, Париж', c: 'Tate Modern, Лондон' },
        q6: { a: 'Одиночество в урбанистическом обществе', b: 'Проблемы экологии', c: 'Все перечисленное' },
        q7: { a: 'Пекин', b: 'Сеул', c: 'Бангкок' },
        q8: { a: 'Красота несовершенства', b: 'Печальное очарование вещей', c: 'Простота и чистота формы' },
        q9: { a: '"Золотая Рыбка"', b: '"Мистер ДОБ"', c: '"Бесконечная комната"' },
        q10: { a: 'Яёи Кусама', b: 'Такаси Мураками', c: 'Чихару Шиота' },
        q11: { a: 'Золотые листы', b: 'Пряжу', c: 'Найденные объекты' },
        q12: { a: 'Юко Мохри', b: 'Яёи Кусама', c: 'Хидеаки Кавашима' },
        q13: { a: 'Юко Мохри', b: 'Икенага Ясунари', c: 'Такаси Мураками' },
        q14: { a: 'Хидеаки Кавашима', b: 'Чихару Шиота', c: 'Яёи Кусама' },
        q15: { a: '"Тан Тан Бо"', b: '"Золотая Рыбка"', c: '"Бесконечная зеркальная комната"' }
    };
    
    if (quizForm) {
        quizForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            let score = 0;
            const answersList = document.getElementById('answersList');
            answersList.innerHTML = '';
            
            for (let i = 1; i <= 15; i++) {
                const questionName = 'q' + i;
                const selectedAnswer = document.querySelector('input[name="' + questionName + '"]:checked');
                const userAnswer = selectedAnswer ? selectedAnswer.value : null;
                const isCorrect = userAnswer === correctAnswers[questionName];
                
                if (isCorrect) score++;
                
                const answerItem = document.createElement('div');
                answerItem.className = 'answer-item';
                
                if (isCorrect) {
                    answerItem.classList.add('answer-correct');
                } else {
                    answerItem.classList.add('answer-incorrect');
                }
                
                const questionEl = document.createElement('div');
                questionEl.className = 'answer-question';
                questionEl.textContent = questionTexts[questionName];
                
                const userAnswerEl = document.createElement('div');
                userAnswerEl.className = 'answer-user';
                userAnswerEl.textContent = 'Ваш ответ: ' + (userAnswer ? answerOptions[questionName][userAnswer] : 'Нет ответа');
                
                const correctAnswerEl = document.createElement('div');
                correctAnswerEl.className = 'correct-answer';
                correctAnswerEl.textContent = 'Правильный ответ: ' + answerOptions[questionName][correctAnswers[questionName]];
                
                answerItem.appendChild(questionEl);
                answerItem.appendChild(userAnswerEl);
                
                if (!isCorrect) {
                    answerItem.appendChild(correctAnswerEl);
                }
                
                answersList.appendChild(answerItem);
            }
            
            document.getElementById('score').textContent = score;
            
            const scoreMessage = document.getElementById('scoreMessage');
            if (score === 15) {
                scoreMessage.textContent = 'Ого! Вы отлично разбираетесь в современном искусстве Японии!';
                scoreMessage.style.color = '#4CAF50';
                scoreMessage.style.fontWeight = 'bold';
            } else if (score >= 12) {
                scoreMessage.textContent = 'Отличный результат! Вы хорошо знаете тему!';
                scoreMessage.style.color = '#007FFF';
            } else if (score >= 8) {
                scoreMessage.textContent = 'Неплохо! Вы разбираетесь в основном, но есть что подучить.';
                scoreMessage.style.color = '#FF9800';
            } else {
                scoreMessage.textContent = 'Попробуйте изучить художников и пройти тест снова!';
                scoreMessage.style.color = '#f44336';
            }
            
            testSection.classList.add('hidden');
            resultsSection.classList.remove('hidden');
            
            resultsSection.scrollIntoView({ behavior: 'smooth' });
        });
    }
    
    if (retryButton) {
        retryButton.addEventListener('click', function() {
            location.reload();
        });
    }
});