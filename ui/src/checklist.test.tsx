import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { XChecklist, Checklist } from './checklist';
import * as T from './qd';
import { initializeIcons } from '@fluentui/react';

const name = 'checklist';
const checklistProps: Checklist = { name, choices: [{ name: 'Choice1' }, { name: 'Choice2' }, { name: 'Choice3' },] }
describe('Checklist.tsx', () => {
  beforeAll(() => initializeIcons())
  beforeEach(() => { T.qd.args[name] = null })

  it('Sets args - single selection', () => {
    const { getByText } = render(<XChecklist model={checklistProps} />)
    fireEvent.click(getByText('Choice1').parentElement!)

    expect(T.qd.args[name]).toMatchObject(['Choice1'])
  })

  it('Sets args - multi selection', () => {
    const { getByText } = render(<XChecklist model={checklistProps} />)
    fireEvent.click(getByText('Choice1').parentElement!)
    fireEvent.click(getByText('Choice2').parentElement!)
    fireEvent.click(getByText('Choice3').parentElement!)

    expect(T.qd.args[name]).toMatchObject(['Choice1', 'Choice2', 'Choice3'])
  })

  it('Sets all choices as args after select all', () => {
    const { getByText } = render(<XChecklist model={checklistProps} />)
    fireEvent.click(getByText('Select All'))

    expect(T.qd.args[name]).toMatchObject(['Choice1', 'Choice2', 'Choice3'])
  })

  it('Sets empty args after deselect all', () => {
    const { getByText } = render(<XChecklist model={checklistProps} />)
    fireEvent.click(getByText('Choice1').parentElement!)
    fireEvent.click(getByText('Choice2').parentElement!)
    fireEvent.click(getByText('Choice3').parentElement!)
    fireEvent.click(getByText('Deselect All'))

    expect(T.qd.args[name]).toMatchObject([])
  })
})