// IMPORT MODULES under test here:
// import example from '../src/example.js';
import { makeUser } from '../make-user.js';
// import { makeQuestLinks } from '../make-quest-links';
// import { quests } from '../data/data.js';

const test = QUnit.test;

test('time to test a function', function(assert) {

    const formData = new FormData();

    formData.set('name', 'Jake');
    formData.set('class', 'Human');
    //Arrange
    // Set up your parameters and expectations
    const expected = {
        name: 'Jake',
        class: 'Human',
        completed: {},
        hp: 100,
        gold: 3
    };
    //Act 
    // Call the function you're testing and set the result to a const
    const result = makeUser(formData);
    //Assert
    // Make assertions about what is expected valid result
    assert.deepEqual(result, expected);
});



// test('time to test a function', function(assert) {


    

    
//     const expected = `<li class="quest-item"><a href="../quest/?id=monsters">A Den of Monsters</a></li>`;
//     //Act 
//     // Call the function you're testing and set the result to a const
//     const result = makeQuestLinks(quests);

//     const resultHTML = result.outerHTML;
//     //Assert
//     // Make assertions about what is expected valid result
//     assert.deepEqual(resultHTML, expected);
// });