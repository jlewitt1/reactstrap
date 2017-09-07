import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import { mapToCssModules } from './utils';

const propTypes = {
  children: PropTypes.node,
  tag: PropTypes.string,
  className: PropTypes.string,
  cssModule: PropTypes.object,
};

const defaultProps = {
  tag: 'div',
};
/**
 * @description Form Feedback
 * @example 
 * import React from 'react';
 * import { Form, FormGroup, Label, Input, FormFeedback, FormText } from 'reactstrap';
 *
 * export default class Example extends React.Component {
 *   render() {
 *     return (
 *       <Form>
 *         <FormGroup color="success">
 *           <Label for="exampleEmail">Input with success</Label>
 *           <Input state="success" />
 *           <FormFeedback>Success! You did it!</FormFeedback>
 *           <FormText color="muted">Example help text that remains unchanged.</FormText>
 *         </FormGroup>
 *         <FormGroup color="warning">
 *           <Label for="examplePassword">Input with warning</Label>
 *           <Input state="warning" />
 *           <FormFeedback>Whoops, check your formatting and try again.</FormFeedback>
 *           <FormText color="muted">Example help text that remains unchanged.</FormText>
 *         </FormGroup>
 *         <FormGroup color="danger">
 *           <Label for="examplePassword">Input with danger</Label>
 *           <Input state="danger" />
 *           <FormFeedback>Oh noes! that name is already taken</FormFeedback>
 *           <FormText color="muted">Example help text that remains unchanged.</FormText>
 *         </FormGroup>
 *       </Form>
 *     );
 *   }
 * }
 * 
 */

const FormFeedback = (props) => {
  const {
    className,
    cssModule,
    tag: Tag,
    ...attributes
  } = props;

  const classes = mapToCssModules(classNames(
    className,
    'form-control-feedback'
  ), cssModule);

  return (
    <Tag {...attributes} className={classes} />
  );
};

FormFeedback.propTypes = propTypes;
FormFeedback.defaultProps = defaultProps;

export default FormFeedback;
