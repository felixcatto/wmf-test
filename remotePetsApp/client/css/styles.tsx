import { css } from '@emotion/react';

export const gs = {
  btn: css`
    box-shadow: 0 1px 3px 0 rgb(0 0 0 / 0.25), 0 1px 2px -1px rgb(0 0 0 / 0.25);
    display: inline-block;
    padding: 6px 12px;
    border: 1px solid;
    border-radius: 6px;
    line-height: 1.3;
    text-align: center;
    user-select: none;
    cursor: pointer;
    vertical-align: middle;
    text-decoration: none;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;

    color: #fff;
    background-color: var(--primary);
    border-color: var(--primary);

    &:hover:not(&:disabled) {
      text-decoration: none;
      background-color: var(--primary-dark);
      border-color: var(--primary-dark);
    }
    &:active:not(&:disabled),
    &:focus:not(&:disabled) {
      background-color: var(--primary-dark);
      border-color: var(--primary-dark);
      box-shadow: 0 0 0 3.2px var(--primary-rgba-50);
    }
    &:disabled {
      opacity: 0.5;
      cursor: not-allowed;
    }

    &_sm {
      padding: 4px 8px;
      font-size: 0.875rem;
      border-radius: 4px;
    }
  `,

  table: css`
    width: 100%;
    & th,
    & td {
      padding: 8px;
      border-bottom: 1px solid #dee2e6;
    }
    & th {
      color: var(--secondary);
      text-align: left;
      background: #f3f4f6;
    }
  `,
};
