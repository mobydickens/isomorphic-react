import { mapStateToProps, QuestionDetailDisplay } from '../QuestionDetail';
import renderer from 'react-test-renderer';
import React from 'react';

describe(`the question detail component`, () => {
    describe (`the container element`, () => {
      describe (`mapStateToProps`, () => {
        it (`should map the state to props correctly`, () => {
          const sampleQuestion = {
            question_id: 42,
            body: "Fire and Blood"
          };
          const appState = {
            questions: [sampleQuestion]
          };
          const ownProps = {
            question_id: 42
          };
          const componentState = mapStateToProps(appState, ownProps);
          console.log(componentState);
          expect(componentState).toEqual(sampleQuestion);
        })
      })
    })
    describe (`the display element`, () => {
      it(`should not regress`, () => {
        const tree = renderer.create(
          <QuestionDetailDisplay 
            title="The meaning of life"
            body='42'
            answer_count={0}
            tags={['hitchhiking']}
          />
        );
        expect(tree.toJSON()).toMatchSnapshot();
    })

  });
});

