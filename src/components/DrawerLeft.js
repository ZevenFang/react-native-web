import React from 'react';
import { Icon } from 'antd-mobile';
import Touch from './Touch';

export default function ({ onPress }) {
  return (
    <Touch onPress={onPress} style={{ padding: 15 }}>
      <Icon type="ellipsis" />
    </Touch>
  );
}
