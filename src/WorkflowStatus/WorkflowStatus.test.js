import React from 'react';
import { render } from '@testing-library/react';
import WorkflowStatus from './WorkflowStatus';

describe('WorkflowStatus', () => {
  it('matches the snapshot with label prop', () => {
    const { container } = render(<WorkflowStatus label="Agreement Status" status="draft" />);
    expect(container).toMatchSnapshot();
  });

  it('matches the snapshot without label prop', () => {
    const { container } = render(<WorkflowStatus status="draft" />);
    expect(container).toMatchSnapshot();
  });

  it('should not render with a label element', () => {
    const { queryByTestId } = render(<WorkflowStatus status="draft" />);
    expect(queryByTestId('workflow-label')).toBeNull();
  });
});
