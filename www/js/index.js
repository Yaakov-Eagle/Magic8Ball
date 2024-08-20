/*
 * Licensed to the Apache Software Foundation (ASF) under one
 * or more contributor license agreements.  See the NOTICE file
 * distributed with this work for additional information
 * regarding copyright ownership.  The ASF licenses this file
 * to you under the Apache License, Version 2.0 (the
 * "License"); you may not use this file except in compliance
 * with the License.  You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing,
 * software distributed under the License is distributed on an
 * "AS IS" BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
 * KIND, either express or implied.  See the License for the
 * specific language governing permissions and limitations
 * under the License.
 */

// Wait for the deviceready event before using any of Cordova's device APIs.
// See https://cordova.apache.org/docs/en/latest/cordova/events/events.html#deviceready
document.addEventListener('deviceready', onDeviceReady, false);

function onDeviceReady() {
    // Cordova is now initialized. Have fun!

}



document.getElementById('askButton').addEventListener('click', function() {
    const answers = [
        "It is certain", "It is decidedly so", "Without a doubt", "Yes � definitely",
        "You may rely on it", "As I see it, yes", "Most likely", "Outlook good",
        "Yes", "Signs point to yes", "Reply hazy, try again", "Ask again later",
        "Better not tell you now", "Cannot predict now", "Concentrate and ask again",
        "Tusik", "Your mom", "סבתא שך", "whatever it is it's yaakov's fault",
        "Very doubtful"
    ];

    const question = document.getElementById('question').value;
    const answerDiv = document.getElementById('answer');
    
    if (question.trim() === '') {
        answerDiv.textContent = 'Please ask a question.';
        return;
    }

    const ball = document.getElementById('ball');
    const answerball = document.getElementById('ans');
    const preview = document.getElementById('prev');
    ball.classList.add('shake');

    setTimeout(() => {
        const randomIndex = Math.floor(Math.random() * answers.length);
        answerDiv.textContent = answers[randomIndex];
        ball.classList.remove('shake');
        preview.style.display='none';
        answerball.style.display = 'block';
    }, 1000); // Shake for 1 second before showing the answer
});