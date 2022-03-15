import { List, Skeleton, Tag } from "antd";
import React, { Suspense } from "react";
import { IBuild } from "../../model/build.model";
import { IJob } from "../../model/job.model";
import {
  STATUS_MARGIN_TOP
} from "../../shared/constants";
import { getColor } from "../../utils/job.utils";
import JobStatusIconFactory from "../jobs/JobStatusIconFactory";
import PrettyMiliseconds from "../shared/PrettyMiliseconds";

interface IListItem {
  job?: IJob;
  build: IBuild;
  hideUserAvatar?: boolean;
  hideMetadata?: boolean;
  showProject?: boolean;
  loading: boolean;
}

export const ListItem: React.FC<IListItem> = props => {
  return props.build ? (
    <List.Item
      style={{ scrollMarginTop: STATUS_MARGIN_TOP - 5 }}
      extra={
        props.loading ? (
          <Skeleton.Input style={{ width: 500 }} active={false} size="small" />
        ) : !props.hideMetadata ? (
          <Suspense
            fallback={
              <Skeleton.Input
                style={{ width: 500 }}
                active={false}
                size="small"
              />
            }
          >
            Executed&nbsp;
            <b>
              {props.build.date ? (
                <PrettyMiliseconds
                  date={new Date(props.build.date).toDateString()}
                />
              ) : null}
            </b>
            &nbsp;ago.{" "}
            {props.build.duration ? (
              <span>
                It took&nbsp;
                <b>
                  <PrettyMiliseconds ms={props.build.duration} />
                </b>
              </span>
            ) : null}
            &nbsp;(estimated:&nbsp;
            <b>
              <PrettyMiliseconds ms={props.build.estimatedDuration} />
            </b>
            )
          </Suspense>
        ) : null
      }
    >
      <List.Item.Meta
        avatar={
          props.loading ? (
            <Skeleton.Avatar size="small" active={false} />
          ) : (
            <Suspense
              fallback={<Skeleton.Avatar size="small" active={false} />}
            >
              <JobStatusIconFactory
                color={getColor(props.job?.color)}
                building={props.build.building}
                result={props.build.result}
                size={24}
              />
            </Suspense>
          )
        }
        title={
          <>
            <a
              href={props.build.url}
              rel="noopener noreferrer"
              target="_blank"
              style={{ fontWeight: "bold" }}
            >
              {props.build.id}
            </a>
            {props.showProject ? (
              <Tag style={{ marginLeft: 5 }}>{props.build.duration}</Tag>
            ) : null}
          </>
        }
      />
    </List.Item>
  ) : null;
};

export default ListItem;
