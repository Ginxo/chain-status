import { LinkOutlined, NodeCollapseOutlined } from "@ant-design/icons";
import { Button, Col, PageHeader, Row, Statistic, Tag } from "antd";
import React, { Suspense } from "react";
import { IProject } from "../../model/project.model";
import { APP_TIMESTAMP_FORMAT, STATISTICS_STYLE } from "../../shared/constants";
import Loading from "../shared/Loading";
import StatisticDate from "../shared/StatisticDate";
import PullRequestStatisticErrorIndex from "../shared/PullRequestStatisticErrorIndex";
import moment from "moment";

const PullRequestStatisticErrorIndexByPullRequest = React.lazy(
  () => import("../shared/PullRequestStatisticErrorIndexByPullRequest")
);

interface IContainerHeader {
  project: IProject;
}

export const ContainerHeader: React.FC<IContainerHeader> = props => {
  return (
    <PageHeader
      className="site-page-header"
      title={
        <Button
          type="link"
          href={props.project.html_url}
          target="_blank"
          icon={<LinkOutlined />}
          style={{ padding: 0, ...STATISTICS_STYLE, fontWeight: "bold" }}
        >
          {props.project.name ?? props.project.key}
        </Button>
      }
      subTitle={props.project.description}
      extra={[]}
    >
      <Row gutter={16}>
        <Col>
          <Statistic
            title="Number of Pull Requests"
            prefix={<NodeCollapseOutlined />}
            value={props.project.pullRequests.length}
            valueStyle={STATISTICS_STYLE}
            suffix={
              <Button
                type="link"
                href={props.project.html_url}
                target="_blank"
                icon={<LinkOutlined />}
                style={{ padding: 0 }}
              />
            }
          />
        </Col>
        <Col>
          <PullRequestStatisticErrorIndex
            title="Error Index"
            pullRequests={props.project.pullRequests}
            placement="right"
            popoverContent={
              props.project.pullRequests?.length ? (
                <Suspense fallback={<Loading />}>
                  <PullRequestStatisticErrorIndexByPullRequest project={props.project} />
                </Suspense>
              ) : null
            }
          />
        </Col>
        <Col>
          <Statistic
            title="Language"
            valueStyle={{ ...STATISTICS_STYLE, display: "none" }}
          />
          <Tag style={{ marginTop: 5 }}>{props.project.language}</Tag>
        </Col>
        <Col>
          <Statistic
            title="Default Branch"
            valueStyle={{ ...STATISTICS_STYLE, display: "none" }}
          />
          <Tag style={{ marginTop: 5 }}>{props.project.default_branch}</Tag>
        </Col>
        <Col>
          {props.project.updated_at ? (
            <Suspense fallback={<Loading style={{ fontSize: 16 }} />}>
              <StatisticDate
                date={moment(
                  new Date(Date.parse(props.project.updated_at))
                ).format(APP_TIMESTAMP_FORMAT)}
                text="Since Last Updating"
              />
            </Suspense>
          ) : null}
        </Col>
      </Row>
    </PageHeader>
  );
};

export default ContainerHeader;
